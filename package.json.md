- https://rutlib.com/book/27706/p/77

 - https://herringtondarkholme.github.io/2015/10/25/angular2-quick-start/

``
{
  "description": "NativeScript Application",
  "license": "SEE LICENSE IN <your-license-filename>",
  "readme": "NativeScript Application",
  "repository": "<fill-your-repository-here>",
  "nativescript": {
    "id": "org.nativescript.angular",
    "tns-ios": {
      "version": "2.5.0"
    }
  },
  "dependencies": {
    "@angular/common": "4.0.0",
    "@angular/compiler": "4.0.0",
    "@angular/core": "4.0.0",
    "@angular/platform-browser": "4.0.0",
    "@angular/platform-browser-dynamic": "4.0.0",
    "rxjs": "~5.2.0",
    "zone.js": "~0.8.2"
  },``

### devDependencies
 - needed for compiling nativescript and typescript


  ``
   "devDependencies": {
    "nativescript-dev-android-snapshot": "^0.*.*",
    "nativescript-dev-typescript": "~0.3.5",
    "typescript": "~2.1.0"
  }
}
``