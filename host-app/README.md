# Host App

# Step 1: 
Install the Module Federation Library


# ng add @angular-architects/module-federation@your-version(16.0.3) --project your app name(host-app) --port 4200 --type dynamic-host




# Update mf.manifest.json:

 Ensure that your mf.manifest.json file in the assets folder contains information about the remote microfrontends. Make it more robust by including additional details such as isActive, displayName, routePath, ngModuleName, viaRoute, and withInPage.

 # Update main.ts: 
 
 Modify your main.ts file to consider only the remote microfrontend marked as isActive: true in mf.manifest.json.

 # Create mfe-dynamic.routes.ts: 
 Implement dynamic route building based on the information from mf.manifest.json using the getManifest and loadRemoteModule functions.


 # Create mfe-service.service.ts: 
 
 Implement a service to initialize the remote microfrontends and update the router configuration.


 # Update app.module.ts: 
 
 Add an APP_INITIALIZER provider to initialize the MfeServiceService before the application starts.


 # Create Landing Page Component:
  Create a new landing page component to display information about the remote microfrontends.


  # Configure remote apps Styles, fonts and images: 
for overriding assets need to use reverse proxy. add proxy.config.json file and then in angular.json

change serve/options for run proxy file in develop mode. 

# keep it mind that the proxy file just work in develop mode. in product mode you need to change IIS config 


If you need to set up a specific proxy rule in your Angular application, you can do so by configuring it in your web server or proxy server. Here's an example of a proxy rule that you can add to your server configuration:

```xml
<rule name="Proxy /assets/remote-app" stopProcessing="true">
    <match url="assets/remote-assets/(.*)" />
    <action type="Rewrite" url="http://remote-app-url/assets/{R:0}" />
</rule>