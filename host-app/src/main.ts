
import { setManifest } from '@angular-architects/module-federation';
import { CustomManifest } from './mfe/mf.model';
import { environment } from './environments/environment';

const mfManifestJson = fetch('/assets/mf.manifest.json');

const parseConfig = async (mfManifest: Promise<Response>) => {
  const manifest: CustomManifest = await (await mfManifest).json();
  const filterManifest: CustomManifest = {};
  for (const key of Object.keys(manifest)) {
    const en: any = environment;
    const value = manifest[key];
    value.remoteEntry = en[value.displayName];
    if (value.isActive === true) {
      filterManifest[key] = value;
    }
  }
  return filterManifest;
};

parseConfig(mfManifestJson)
  .then((data) => setManifest(data))
  .catch((err) => console.log(err))
  .then((_) => import('./bootstrap'))
  .catch((err) => console.log(err));
