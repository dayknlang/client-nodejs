# Changelog
All notable changes to this project will be documented in this file.

The Changelog file gives an overview of all of the notable changes affecting the project.
The file format of it is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/), and the project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

For public Changelog covering all changes done to Pipedrive’s API, webhooks and app extensions platforms, see [public Changelog](https://pipedrive.readme.io/docs/changelog) with discussion area in [Developers Community](https://devcommunity.pipedrive.com/c/documentation/changelog/19).

## 12.2.0
### Changed
- Changed notes and comments endpoints additional_data to match the correct pagination response
structure
* GET /notes
* GET /notes/:id/comments

## 12.1.0
### Removed
* Removed deprecated endpoints that were deleted:
  * GET /deals/find
  * GET /persons/find
  * GET /organizations/find
  * GET /products/find
  * GET /searchResults
  * GET /searchResults/field

## 12.0.3
### Changed
- Changed addDeal POST endpoint to include required person_id or org_id

## 12.0.2
### Fixed
* Use /api/v1 path when accessing the API using company domain

## 12.0.1
### Fixed
* Fixed UNKNOWN_BASE_TYPE error related to updateStage

## 12.0.0
### Added
* Support for endpoints added and updated endpoints changed after March 31, 2021
* Support for multiple instances [issue #176](https://github.com/pipedrive/client-nodejs/issues/176)
* Convenience functions regarding OAuth 2.0 lifecycle including `buildAuthorizationUrl`, `authorize` and `refreshToken`
* Support for changing the host URL [issue #228](https://github.com/pipedrive/client-nodejs/issues/228)
* Support for both snake_case and camelCase in request parameters
* `UpdateProductResponse` for `PUT /products/{id}`
* `Team` (singular) schema for endpoints that deal with a single team
* Support for custom fields for `Content-Type: application/x-www-form-urlencoded` type requests
* Added note field to call logs.
* Added pagination parameters documentation for endpoints:
  * api/v1/DealFields#getDealFields
  * api/v1/OrganizationFields#getOrganizationFields
  * api/v1/PersonFields#getPersonFields
  * api/v1/ProductFields#getProductFields
### Changed
* Changed POST/PUT for a lot of endpoints to accept `application/json` instead of `application/x-www-form-urlencoded`
* Added required fields to the OrganizationRelationship and Notes POST endpoints
* Updated `MailThreadPut` schema to represent `object` in response instead of an `array`
* Updated description for `MailThreadOne`
* Split `Product` schema into `BaseProduct` and `ProductWithArrayPrices` or `ProductWithObjectPrices` to represent `prices` property with `array` type and `object` type respectively
* Use the new `ProductWithObjectPrices` in `UpdateProductResponse`
* `TeamSuccess` response schema to refer to `Team` (singular) instead of `Teams` (plural)
* Extended `DELETE /calllogs/{id}` security with `api_key` property.
* Extended `POST /callLogs/{id}/recordings` security with `api_key` property.
* Extended `GET /v1/roles/{id}/settings` response with `lead_default_visibility` property.
* Extended `POST /v1/roles/{id}/settings` request payload with  `lead_default_visibility` property.
* Deleted `MailThreads` and `MailMessages` from API operation groups and combined them under `Mailbox` group.
* Extracted `LeadLabels` and `LeadSources` API operation groups from `Leads` group.
* Deleted `MailThreads` and `MailMessages` from API operation groups and combined them under `Mailbox` group.
* Extracted `LeadLabels` and `LeadSources` API operation groups from `Leads` group.
* Updated documentation for search endpoint: include Lead as one of the possible returned entities in related objects
* Changed POST /v1/webhooks to accept `application/json` instead of `application/x-www-form-urlencoded` to reflect the reality
### Removed
* Deleted deprecated `note` field from all lead related documents.
* Deleted unused files (copied latest auto-generated version)
### Fixed
* Fixed GET /goals/:id/results `period.start` parameter description with specified possible dates
* Fixed GET /goals/:id/results `period.end` parameter description with specified possible dates
* Fixed `GET /goal/:id/results` error handling in cases when period.start or period.end dates are out of possible range
* Fixed `GET /goal/:id/results` error handling in case when there are no existing stages connected to specified goal
* Fixed typo in lead example response (`crrency` to `currency`)

[Unreleased]: https://github.com/pipedrive/api-docs/compare/v1.0.0...HEAD
