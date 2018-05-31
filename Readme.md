this example is demo of React Native Charts Wrapper lib.

step:

npm install --save react-native-charts-wrapper

react-native link react-native-charts-wrapper

create Podfile by using command: touch ios/Podfile

after that replace all lines:

note: ChartExample is your name project.

```
use_frameworks!

target 'ChartExample' do
  pod 'SwiftyJSON', '4.0.0'      # old version: '3.1.4'
  pod 'Charts', '3.1.1'          # old version: '3.0.3'
end

post_install do |installer|
  installer.pods_project.targets.each do |target|
    target.build_configurations.each do |config|
      config.build_settings['SWIFT_VERSION'] = '4.1'    # old version: '3.0' 
    end
  end
end
```

then run command: pod install.

open ChartExample.xcworkspace, drag and drop ReactNativeCharts folder in 

node_modules/react-native-charts-wrapper/ios to topLevel your project


Create Objective C briding header, give it name ChartExample-Briding-Header.h    (rename ChartExample to your project name)

<p align="center">
  <img src="https://github.com/hungdev/react-native-charts-wrapper-example-swift4/blob/master/img/img1.png?raw=true" width=360/>
</p>

<p align="center">
  <img src="https://github.com/hungdev/react-native-charts-wrapper-example-swift4/blob/master/img/img2.png?raw=true" width=360/>
</p>


Create Objective C briding header, give it name ChartExample-Briding-Header.h    (rename ChartExample to your project name)

<p align="center">
  <img src="https://github.com/hungdev/react-native-charts-wrapper-example-swift4/blob/master/img/img3.png?raw=true" width=360/>
</p>

<p align="center">
  <img src="https://github.com/hungdev/react-native-charts-wrapper-example-swift4/blob/master/img/img4.png?raw=true" width=360/>
</p>

<p align="center">
  <img src="https://github.com/hungdev/react-native-charts-wrapper-example-swift4/blob/master/img/img5.png?raw=true" width=360/>
</p>

add lines to that file:

```
#import "React/RCTBridge.h"
#import "React/RCTViewManager.h"
#import "React/RCTUIManager.h"
#import "React/UIView+React.h"
#import "React/RCTBridgeModule.h"
#import "React/RCTEventDispatcher.h"
#import "React/RCTEventEmitter.h"
#import "React/RCTFont.h"
```

Add your ChartExample-Bridging-Header.h to Build Settings -> Swift Compiler-General

in field Swift language version, chose swift 4.1

<p align="center">
  <img src="https://github.com/hungdev/react-native-charts-wrapper-example-swift4/blob/master/img/img5.png?raw=true" width=360/>
</p>


note: setup with swift 3 version: https://github.com/hungdev/react-native-charts-wrapper-example-swift3

Your may be interested in this article Detail Guide provided by contributor, but some configure in it is outdated, like missing #import "React/RCTFont.h" in Bridge Header.

https://medium.com/skyshidigital/make-chart-in-react-native-671910254e9b