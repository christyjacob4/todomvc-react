import * as Appwrite from 'appwrite';
const appwrite = new Appwrite();
appwrite
    .setEndpoint(config.endpoint) // Set only when using self-hosted solution
    .setProject(config.projectId);
