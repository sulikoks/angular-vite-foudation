import { initFederation as _initFederation, processRemoteInfo, LoadRemoteModuleOptions } from "@softarc/native-federation";
import { loadRemoteModule as _loadRemoteModule } from "@softarc/native-federation-runtime";

const remotes: Record<string, string> = {
  'mfe1': 'http://localhost:4401/remoteEntry.json',
};

export async function loadRemoteModule(options: LoadRemoteModuleOptions) {
  const remote = remotes[options.remoteName || ''];
  remote && await processRemoteInfo(remote, options.remoteName);
  return await _loadRemoteModule(options);
}

export async function initFederation() {
  return await _initFederation();
}
