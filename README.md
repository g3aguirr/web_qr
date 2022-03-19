# Web QR for Netbox
This web app is a starting framework for a QR reader that lets the user view and edit device details from a scanned QR code. It uses [this library for QR scanning](https://github.com/mebjas/html5-qrcode).

## Notes
The login is yet to be fully implemented. Login is designed to ask for Netbox login, then send a REST API call to Netbox to request a token. Code that has been tested using hardcoded credentials has been generalized.

## Example Images:

>![home-page](https://i.imgur.com/C56neQi.png)

>![example-data](https://i.imgur.com/O6MZsde.png)
