import { sdk } from '@farcaster/frame-sdk';

await sdk.actions.ready();

await sdk.actions.ready({ disableNativeGestures: true });
