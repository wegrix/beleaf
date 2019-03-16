/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
self.addEventListener("install",e=>{self.skipWaiting()}),self.addEventListener("activate",e=>{e.waitUntil(self.clients.claim()),self.registration.unregister().then(()=>{console.log("NGSW Safety Worker - unregistered old service worker")})});