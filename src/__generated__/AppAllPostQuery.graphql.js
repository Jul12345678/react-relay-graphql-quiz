/**
 * @generated SignedSource<<1d61b3d4081aa7a1847b1e9787f4742b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppAllPostQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ListPage_viewer"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppAllPostQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "userId",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "87828fec6bd0deb8a5d362821713b2bf",
    "id": null,
    "metadata": {},
    "name": "AppAllPostQuery",
    "operationKind": "query",
    "text": "query AppAllPostQuery {\n  viewer {\n    ...ListPage_viewer\n    id\n  }\n}\n\nfragment ListPage_viewer on Viewer {\n  id\n  userId\n}\n"
  }
};

node.hash = "5048fa94ebe92a23f88faf4deff28db3";

module.exports = node;
