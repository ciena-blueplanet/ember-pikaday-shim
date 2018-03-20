# 1.0.1 (2018-03-20)
* **Updated** pull request template
* **Added** issue template
* **Updated** to `pr-bumper` version `3`
* **Updated** to node 8
* **Added** slack integration
* **Updated** `ember-frost-test` to `^4.0.1`
* **Updated** `ember-test-utils` to `^8.1.1`
* **Removed** ignoring of `package-lock.json` file
* **Added** `package-lock.json` file
* **Updated** Travis CI scripts to allow non-exact node version

# 1.0.0 (2018-01-09)
* **Added** `ember-frost-test` @ `^4.0.0`
* **Added** `chai-jquery` @ `^2.0.0`
* **Updated** `ember-cli-chai` to `0.4.3`
* **Updated** to pin `ember-cli-htmlbars-inline-precompile` @ `0.3.12`
* **Updated** `ember-cli-mocha` to `0.14.4`
* **Added** `ember-hook` @ `1.4.2`
* **Added** `ember-sinon` @ `^0.7.0`
* **Updated** `ember-test-utils` to `^8.1.0`
* **Added** `sinon-chai` @ `^2.14.0`
* **Added** ignoring of `package-lock` until we are ready to move to node 8
* **Removed** useLintTree ember-cli-mocha configuration from `ember-cli-build.js`
* **Added** ignoring of linting `CHANGELOG.md`
* **Removed** `.remarkrc` file since it is now provided by `ember-test-utils`
* **Updated** `broccoli-funnel` to `^2.0.1`
* **Updated** `broccoli-merge-trees` to `^2.0.0`
* **Updated** `ember-cli-moment-shim` to `3.3.3`

# 0.1.4 (2017-12-12)
* **Updated** version of `pikaday` to pinned `1.6.1`
* **Added** bower since it is no longer included by Ember CLI

# 0.1.3 (2017-11-10)
* Delete blueprint
* Remove `ember-cli-moment-shim` from devDependencies in _package.json_
* Remove `pikaday` from devDependencies in _package.json_
* Add `ember-cli-moment-shim` to dependencies in _package.json_
* Add `pikaday` to dependencies in _package.json_

## Steps to perform in consuming application

* Remove `ember-cli-moment-shim` from devDependencies in _package.json_ if this add-on is the only codebase relying on it.
* Remove `pikaday` from devDependencies in _package.json_ if this add-on is the only codebase relying on it.

# 0.1.2 (2017-08-02)
* **Updated** to Ember CLI 2.12.3


# 0.1.1 (2017-08-02)
* **Added** CONTRIBUTING.md file
* **Updated** missed items during Ember CLI 2.11.x upgrade
* **Updated** to use pr-bumper version 2
* **Updated** PULL_REQUEST_TEMPLATE to support `#none#` option
* **Updated** secure auth tokens


# 0.1.0

* **Added** proper CI config so to publish first release.

