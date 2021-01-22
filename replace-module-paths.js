export default function replaceImport(originalPath, callingFileName, options) {
  if (callingFileName.indexOf('/crypto/') !== -1) {
    return originalPath.replace('~', 'expo-crypto');
  } else {
    return originalPath.replace('~', 'common');
  }
}
