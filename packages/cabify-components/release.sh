#!/bin/bash -e

# Export RELEASE env var
export RELEASE=1

# Verifies that is running from the right directory
if ! [ -e release.sh ]; then
  echo >&2 "Please run release.sh from the repo root"
  exit 1
fi

GIT_BRANCH="master"
GIT_REMOTE="origin_ssh"
GIT_REPOSITORY=$(node -p "require('./package').repository")
PACKAGE_VERSION=$(node -p "require('./package').version")
VVERSION="v$PACKAGE_VERSION"
TAG_NAME="$VVERSION"

git remote add $GIT_REMOTE $GIT_REPOSITORY
git fetch $GIT_REMOTE --tags

TAG_EXISTS=$(git tag -l "$TAG_NAME")

if [ ! -z "$TAG_EXISTS" ]; then
  echo "There is already a tag for $VVERSION. Skiping deploy."
else
  # npm install
  echo "Deploying git tag $VVERSION"
  git tag $TAG_NAME
  git push $GIT_REMOTE $TAG_NAME

  echo "Publishing as gitpkg $VVERSION"
  $(npm bin)/gitpkg publish
  #rm -rf node_modules
fi

