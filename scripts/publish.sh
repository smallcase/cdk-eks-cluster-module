#!/bin/sh
yarn install && yarn projen && yarn build && yarn bump && npm publish