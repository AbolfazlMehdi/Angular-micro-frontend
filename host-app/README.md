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