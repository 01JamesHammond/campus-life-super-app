/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
    let map;

    function initMap() {
      const centerCoords = { lat: -34.397, lng: 150.644 };

      map = new google.maps.Map(document.getElementById("map"), {
        center: centerCoords,
        zoom: 8,
      });

      new google.maps.Marker({
        position: centerCoords,
        map: map,
        title: "Campus Center",
      });
    }

initMap();