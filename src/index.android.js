//
// Dummy branch file for Android:
// react-native-branch is broken in Android
// on SDK 33 due to some issue preventing
// the exposing of `RNBranch` in NativeModules
// 
class Branch {
  constructor() {
    return null;
  }
}
class BranchEvent {
  constructor() {
    return null;
  }
}

export { Branch, BranchEvent }
export default new Branch()
