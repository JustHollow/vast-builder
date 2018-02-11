# VAST2 API Documentation
<a id="VastElement" name="VastElement"></a>
## Class VastElement

### methods


```typescript
// return the parent element
and(): VastElement
```

```typescript
// alias for .and().and()
back(): VastElement
```

```typescript
// turn element content into cdata. return the current element
cdata(): VastElement
```

```typescript
// Allow adding custom XML Tag, usefull for <Extensions>
dangerouslyAttachCustomTag(tagName: string, content: string, attributes: Object): VastElement
```

```typescript
// Get filtered attributes (only specs valids one will be returned)
getAttrs(): Object
```

```typescript
// Return the generated Vast string
toXml(): string
```

```typescript
// return the current VAST api version
getVastVersion(): number
```

```typescript
// return an array all direct childs with "name"
getChilds(name: string): Array<VastElement>
```

```typescript
// validate your current vast build. print error if options.logWarn = true
validate(): boolean
```

<a id="apiv2" name="apiv2"></a>
## Class apiv2 _extends_ VastElement

### methods

_all herited from [VastElement](#VastElement)_ and : 

```typescript
// Attach a "VAST" child to current "apiv2". Return "VAST" to move on child level.
attachVAST(attributes: {
  version:("2.0")
}): VAST
```

↘ _go to [VAST](#VAST_2)_

<a id="VAST_2" name="VAST_2"></a>
## Class VAST _extends_ VastElement

child of [apiv2](#apiv2) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```typescript
// Attach a "Ad" child to current "VAST". Return "Ad" to move on child level.
attachAd(attributes: {
  id: string
}): Ad
```

↘ _go to [Ad](#Ad_3)_

<a id="Ad_3" name="Ad_3"></a>
## Class Ad _extends_ VastElement

child of [VAST](#VAST_2) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```typescript
// Attach a "InLine" child to current "Ad". Return "InLine" to move on child level.
attachInLine(): InLine
```

↘ _go to [InLine](#InLine_4)_

```typescript
// Attach a "Wrapper" child to current "Ad". Return "Wrapper" to move on child level.
attachWrapper(): Wrapper
```

↘ _go to [Wrapper](#Wrapper_45)_

<a id="InLine_4" name="InLine_4"></a>
## Class InLine _extends_ VastElement

child of [Ad](#Ad_3) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```typescript
// Add a "AdSystem" child to current "InLine". Return "InLine" to stay on same current level.
addAdSystem(content: string, attributes: {
  version: string
}): InLine
```

↘ _go to [InLine](#InLine_4)_ _(current class)_

```typescript
// Attach a "AdSystem" child to current "InLine". Return "AdSystem" to move on child level.
attachAdSystem(content: string, attributes: {
  version: string
}): AdSystem
```

↘ _go to [AdSystem](#AdSystem_5)_ _(last level element)_

```typescript
// Add a "AdTitle" child to current "InLine". Return "InLine" to stay on same current level.
addAdTitle(content: string): InLine
```

↘ _go to [InLine](#InLine_4)_ _(current class)_

```typescript
// Attach a "AdTitle" child to current "InLine". Return "AdTitle" to move on child level.
attachAdTitle(content: string): AdTitle
```

↘ _go to [AdTitle](#AdTitle_6)_ _(last level element)_

```typescript
// Add a "Description" child to current "InLine". Return "InLine" to stay on same current level.
addDescription(content: string): InLine
```

↘ _go to [InLine](#InLine_4)_ _(current class)_

```typescript
// Attach a "Description" child to current "InLine". Return "Description" to move on child level.
attachDescription(content: string): Description
```

↘ _go to [Description](#Description_7)_ _(last level element)_

```typescript
// Add a "Survey" child to current "InLine". Return "InLine" to stay on same current level.
addSurvey(content: string): InLine
```

↘ _go to [InLine](#InLine_4)_ _(current class)_

```typescript
// Attach a "Survey" child to current "InLine". Return "Survey" to move on child level.
attachSurvey(content: string): Survey
```

↘ _go to [Survey](#Survey_8)_ _(last level element)_

```typescript
// Add a "Error" child to current "InLine". Return "InLine" to stay on same current level.
addError(content: string): InLine
```

↘ _go to [InLine](#InLine_4)_ _(current class)_

```typescript
// Attach a "Error" child to current "InLine". Return "Error" to move on child level.
attachError(content: string): Error
```

↘ _go to [Error](#Error_9)_ _(last level element)_

```typescript
// Add a "Impression" child to current "InLine". Return "InLine" to stay on same current level.
addImpression(content: string, attributes: {
  id: string
}): InLine
```

↘ _go to [InLine](#InLine_4)_ _(current class)_

```typescript
// Attach a "Impression" child to current "InLine". Return "Impression" to move on child level.
attachImpression(content: string, attributes: {
  id: string
}): Impression
```

↘ _go to [Impression](#Impression_10)_ _(last level element)_

```typescript
// Attach a "Creatives" child to current "InLine". Return "Creatives" to move on child level.
attachCreatives(): Creatives
```

↘ _go to [Creatives](#Creatives_11)_

```typescript
// Attach a "Extensions" child to current "InLine". Return "Extensions" to move on child level.
attachExtensions(): Extensions
```

↘ _go to [Extensions](#Extensions_43)_

<a id="AdSystem_5" name="AdSystem_5"></a>
## Class AdSystem _extends_ VastElement

child of [InLine](#InLine_4) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="AdTitle_6" name="AdTitle_6"></a>
## Class AdTitle _extends_ VastElement

child of [InLine](#InLine_4) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Description_7" name="Description_7"></a>
## Class Description _extends_ VastElement

child of [InLine](#InLine_4) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Survey_8" name="Survey_8"></a>
## Class Survey _extends_ VastElement

child of [InLine](#InLine_4) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Error_9" name="Error_9"></a>
## Class Error _extends_ VastElement

child of [InLine](#InLine_4) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Impression_10" name="Impression_10"></a>
## Class Impression _extends_ VastElement

child of [InLine](#InLine_4) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Creatives_11" name="Creatives_11"></a>
## Class Creatives _extends_ VastElement

child of [InLine](#InLine_4) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```typescript
// Attach a "Creative" child to current "Creatives". Return "Creative" to move on child level.
attachCreative(attributes: {
  id: string, 
  sequence: string, 
  adID: string
}): Creative
```

↘ _go to [Creative](#Creative_12)_

<a id="Creative_12" name="Creative_12"></a>
## Class Creative _extends_ VastElement

child of [Creatives](#Creatives_11) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```typescript
// Attach a "Linear" child to current "Creative". Return "Linear" to move on child level.
attachLinear(): Linear
```

↘ _go to [Linear](#Linear_13)_

```typescript
// Attach a "CompanionAds" child to current "Creative". Return "CompanionAds" to move on child level.
attachCompanionAds(): CompanionAds
```

↘ _go to [CompanionAds](#CompanionAds_24)_

```typescript
// Attach a "NonLinearAds" child to current "Creative". Return "NonLinearAds" to move on child level.
attachNonLinearAds(): NonLinearAds
```

↘ _go to [NonLinearAds](#NonLinearAds_34)_

<a id="Linear_13" name="Linear_13"></a>
## Class Linear _extends_ VastElement

child of [Creative](#Creative_12) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```typescript
// Add a "Duration" child to current "Linear". Return "Linear" to stay on same current level.
addDuration(content: string): Linear
```

↘ _go to [Linear](#Linear_13)_ _(current class)_

```typescript
// Attach a "Duration" child to current "Linear". Return "Duration" to move on child level.
attachDuration(content: string): Duration
```

↘ _go to [Duration](#Duration_14)_ _(last level element)_

```typescript
// Attach a "TrackingEvents" child to current "Linear". Return "TrackingEvents" to move on child level.
attachTrackingEvents(): TrackingEvents
```

↘ _go to [TrackingEvents](#TrackingEvents_15)_

```typescript
// Add a "AdParameters" child to current "Linear". Return "Linear" to stay on same current level.
addAdParameters(content: string): Linear
```

↘ _go to [Linear](#Linear_13)_ _(current class)_

```typescript
// Attach a "AdParameters" child to current "Linear". Return "AdParameters" to move on child level.
attachAdParameters(content: string): AdParameters
```

↘ _go to [AdParameters](#AdParameters_17)_ _(last level element)_

```typescript
// Attach a "VideoClicks" child to current "Linear". Return "VideoClicks" to move on child level.
attachVideoClicks(): VideoClicks
```

↘ _go to [VideoClicks](#VideoClicks_18)_

```typescript
// Attach a "MediaFiles" child to current "Linear". Return "MediaFiles" to move on child level.
attachMediaFiles(): MediaFiles
```

↘ _go to [MediaFiles](#MediaFiles_22)_

<a id="Duration_14" name="Duration_14"></a>
## Class Duration _extends_ VastElement

child of [Linear](#Linear_13) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="TrackingEvents_15" name="TrackingEvents_15"></a>
## Class TrackingEvents _extends_ VastElement

child of [Linear](#Linear_13) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```typescript
// Add a "Tracking" child to current "TrackingEvents". Return "TrackingEvents" to stay on same current level.
addTracking(content: string, attributes: {
  event:("creativeView"|"start"|"midpoint"|"firstQuartile"|"thirdQuartile"|"complete"|"mute"|"unmute"|"pause"|"rewind"|"resume"|"fullscreen"|"expand"|"collapse"|"acceptInvitation"|"close")
}): TrackingEvents
```

↘ _go to [TrackingEvents](#TrackingEvents_15)_ _(current class)_

```typescript
// Attach a "Tracking" child to current "TrackingEvents". Return "Tracking" to move on child level.
attachTracking(content: string, attributes: {
  event:("creativeView"|"start"|"midpoint"|"firstQuartile"|"thirdQuartile"|"complete"|"mute"|"unmute"|"pause"|"rewind"|"resume"|"fullscreen"|"expand"|"collapse"|"acceptInvitation"|"close")
}): Tracking
```

↘ _go to [Tracking](#Tracking_16)_ _(last level element)_

<a id="Tracking_16" name="Tracking_16"></a>
## Class Tracking _extends_ VastElement

child of [TrackingEvents](#TrackingEvents_15) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="AdParameters_17" name="AdParameters_17"></a>
## Class AdParameters _extends_ VastElement

child of [Linear](#Linear_13) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="VideoClicks_18" name="VideoClicks_18"></a>
## Class VideoClicks _extends_ VastElement

child of [Linear](#Linear_13) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```typescript
// Add a "ClickThrough" child to current "VideoClicks". Return "VideoClicks" to stay on same current level.
addClickThrough(content: string): VideoClicks
```

↘ _go to [VideoClicks](#VideoClicks_18)_ _(current class)_

```typescript
// Attach a "ClickThrough" child to current "VideoClicks". Return "ClickThrough" to move on child level.
attachClickThrough(content: string): ClickThrough
```

↘ _go to [ClickThrough](#ClickThrough_19)_ _(last level element)_

```typescript
// Add a "ClickTracking" child to current "VideoClicks". Return "VideoClicks" to stay on same current level.
addClickTracking(content: string): VideoClicks
```

↘ _go to [VideoClicks](#VideoClicks_18)_ _(current class)_

```typescript
// Attach a "ClickTracking" child to current "VideoClicks". Return "ClickTracking" to move on child level.
attachClickTracking(content: string): ClickTracking
```

↘ _go to [ClickTracking](#ClickTracking_20)_ _(last level element)_

```typescript
// Add a "CustomClick" child to current "VideoClicks". Return "VideoClicks" to stay on same current level.
addCustomClick(content: string, attributes: {
  id: string
}): VideoClicks
```

↘ _go to [VideoClicks](#VideoClicks_18)_ _(current class)_

```typescript
// Attach a "CustomClick" child to current "VideoClicks". Return "CustomClick" to move on child level.
attachCustomClick(content: string, attributes: {
  id: string
}): CustomClick
```

↘ _go to [CustomClick](#CustomClick_21)_ _(last level element)_

<a id="ClickThrough_19" name="ClickThrough_19"></a>
## Class ClickThrough _extends_ VastElement

child of [VideoClicks](#VideoClicks_18) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="ClickTracking_20" name="ClickTracking_20"></a>
## Class ClickTracking _extends_ VastElement

child of [VideoClicks](#VideoClicks_18) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="CustomClick_21" name="CustomClick_21"></a>
## Class CustomClick _extends_ VastElement

child of [VideoClicks](#VideoClicks_18) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="MediaFiles_22" name="MediaFiles_22"></a>
## Class MediaFiles _extends_ VastElement

child of [Linear](#Linear_13) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```typescript
// Add a "MediaFile" child to current "MediaFiles". Return "MediaFiles" to stay on same current level.
addMediaFile(content: string, attributes: {
  id: string, 
  delivery:("progressive"|"streaming"), 
  type: string, 
  bitrate: string, 
  width: string, 
  height: string, 
  scalable: string, 
  mantainAspectRatio: string, 
  apiFramework: string
}): MediaFiles
```

↘ _go to [MediaFiles](#MediaFiles_22)_ _(current class)_

```typescript
// Attach a "MediaFile" child to current "MediaFiles". Return "MediaFile" to move on child level.
attachMediaFile(content: string, attributes: {
  id: string, 
  delivery:("progressive"|"streaming"), 
  type: string, 
  bitrate: string, 
  width: string, 
  height: string, 
  scalable: string, 
  mantainAspectRatio: string, 
  apiFramework: string
}): MediaFile
```

↘ _go to [MediaFile](#MediaFile_23)_ _(last level element)_

<a id="MediaFile_23" name="MediaFile_23"></a>
## Class MediaFile _extends_ VastElement

child of [MediaFiles](#MediaFiles_22) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="CompanionAds_24" name="CompanionAds_24"></a>
## Class CompanionAds _extends_ VastElement

child of [Creative](#Creative_12) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```typescript
// Attach a "Companion" child to current "CompanionAds". Return "Companion" to move on child level.
attachCompanion(attributes: {
  id: string, 
  width: string, 
  height: string, 
  expandedWidth: string, 
  expandedHeight: string, 
  apiFramework: string
}): Companion
```

↘ _go to [Companion](#Companion_25)_

<a id="Companion_25" name="Companion_25"></a>
## Class Companion _extends_ VastElement

child of [CompanionAds](#CompanionAds_24) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```typescript
// Add a "StaticResource" child to current "Companion". Return "Companion" to stay on same current level.
addStaticResource(content: string, attributes: {
  creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")
}): Companion
```

↘ _go to [Companion](#Companion_25)_ _(current class)_

```typescript
// Attach a "StaticResource" child to current "Companion". Return "StaticResource" to move on child level.
attachStaticResource(content: string, attributes: {
  creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")
}): StaticResource
```

↘ _go to [StaticResource](#StaticResource_26)_ _(last level element)_

```typescript
// Add a "IFrameResource" child to current "Companion". Return "Companion" to stay on same current level.
addIFrameResource(content: string): Companion
```

↘ _go to [Companion](#Companion_25)_ _(current class)_

```typescript
// Attach a "IFrameResource" child to current "Companion". Return "IFrameResource" to move on child level.
attachIFrameResource(content: string): IFrameResource
```

↘ _go to [IFrameResource](#IFrameResource_27)_ _(last level element)_

```typescript
// Add a "HTMLResource" child to current "Companion". Return "Companion" to stay on same current level.
addHTMLResource(content: string): Companion
```

↘ _go to [Companion](#Companion_25)_ _(current class)_

```typescript
// Attach a "HTMLResource" child to current "Companion". Return "HTMLResource" to move on child level.
attachHTMLResource(content: string): HTMLResource
```

↘ _go to [HTMLResource](#HTMLResource_28)_ _(last level element)_

```typescript
// Attach a "TrackingEvents" child to current "Companion". Return "TrackingEvents" to move on child level.
attachTrackingEvents(): TrackingEvents
```

↘ _go to [TrackingEvents](#TrackingEvents_29)_

```typescript
// Add a "CompanionClickThrough" child to current "Companion". Return "Companion" to stay on same current level.
addCompanionClickThrough(content: string): Companion
```

↘ _go to [Companion](#Companion_25)_ _(current class)_

```typescript
// Attach a "CompanionClickThrough" child to current "Companion". Return "CompanionClickThrough" to move on child level.
attachCompanionClickThrough(content: string): CompanionClickThrough
```

↘ _go to [CompanionClickThrough](#CompanionClickThrough_31)_ _(last level element)_

```typescript
// Add a "AltText" child to current "Companion". Return "Companion" to stay on same current level.
addAltText(content: string): Companion
```

↘ _go to [Companion](#Companion_25)_ _(current class)_

```typescript
// Attach a "AltText" child to current "Companion". Return "AltText" to move on child level.
attachAltText(content: string): AltText
```

↘ _go to [AltText](#AltText_32)_ _(last level element)_

```typescript
// Add a "AdParameters" child to current "Companion". Return "Companion" to stay on same current level.
addAdParameters(content: string): Companion
```

↘ _go to [Companion](#Companion_25)_ _(current class)_

```typescript
// Attach a "AdParameters" child to current "Companion". Return "AdParameters" to move on child level.
attachAdParameters(content: string): AdParameters
```

↘ _go to [AdParameters](#AdParameters_33)_ _(last level element)_

<a id="StaticResource_26" name="StaticResource_26"></a>
## Class StaticResource _extends_ VastElement

child of [Companion](#Companion_25) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="IFrameResource_27" name="IFrameResource_27"></a>
## Class IFrameResource _extends_ VastElement

child of [Companion](#Companion_25) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="HTMLResource_28" name="HTMLResource_28"></a>
## Class HTMLResource _extends_ VastElement

child of [Companion](#Companion_25) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="TrackingEvents_29" name="TrackingEvents_29"></a>
## Class TrackingEvents _extends_ VastElement

child of [Companion](#Companion_25) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```typescript
// Add a "Tracking" child to current "TrackingEvents". Return "TrackingEvents" to stay on same current level.
addTracking(content: string, attributes: {
  event:("creativeView")
}): TrackingEvents
```

↘ _go to [TrackingEvents](#TrackingEvents_29)_ _(current class)_

```typescript
// Attach a "Tracking" child to current "TrackingEvents". Return "Tracking" to move on child level.
attachTracking(content: string, attributes: {
  event:("creativeView")
}): Tracking
```

↘ _go to [Tracking](#Tracking_30)_ _(last level element)_

<a id="Tracking_30" name="Tracking_30"></a>
## Class Tracking _extends_ VastElement

child of [TrackingEvents](#TrackingEvents_29) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="CompanionClickThrough_31" name="CompanionClickThrough_31"></a>
## Class CompanionClickThrough _extends_ VastElement

child of [Companion](#Companion_25) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="AltText_32" name="AltText_32"></a>
## Class AltText _extends_ VastElement

child of [Companion](#Companion_25) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="AdParameters_33" name="AdParameters_33"></a>
## Class AdParameters _extends_ VastElement

child of [Companion](#Companion_25) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="NonLinearAds_34" name="NonLinearAds_34"></a>
## Class NonLinearAds _extends_ VastElement

child of [Creative](#Creative_12) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```typescript
// Attach a "NonLinear" child to current "NonLinearAds". Return "NonLinear" to move on child level.
attachNonLinear(attributes: {
  id: string, 
  width: string, 
  height: string, 
  expandedWidth: string, 
  expandedHeight: string, 
  scalable: string, 
  maintainAspectRatio: string, 
  minSuggestedDuration: string, 
  apiFramework: string
}): NonLinear
```

↘ _go to [NonLinear](#NonLinear_35)_

```typescript
// Attach a "TrackingEvents" child to current "NonLinearAds". Return "TrackingEvents" to move on child level.
attachTrackingEvents(): TrackingEvents
```

↘ _go to [TrackingEvents](#TrackingEvents_39)_

```typescript
// Add a "NonLinearClickThrough" child to current "NonLinearAds". Return "NonLinearAds" to stay on same current level.
addNonLinearClickThrough(content: string): NonLinearAds
```

↘ _go to [NonLinearAds](#NonLinearAds_34)_ _(current class)_

```typescript
// Attach a "NonLinearClickThrough" child to current "NonLinearAds". Return "NonLinearClickThrough" to move on child level.
attachNonLinearClickThrough(content: string): NonLinearClickThrough
```

↘ _go to [NonLinearClickThrough](#NonLinearClickThrough_41)_ _(last level element)_

```typescript
// Add a "AdParameters" child to current "NonLinearAds". Return "NonLinearAds" to stay on same current level.
addAdParameters(content: string): NonLinearAds
```

↘ _go to [NonLinearAds](#NonLinearAds_34)_ _(current class)_

```typescript
// Attach a "AdParameters" child to current "NonLinearAds". Return "AdParameters" to move on child level.
attachAdParameters(content: string): AdParameters
```

↘ _go to [AdParameters](#AdParameters_42)_ _(last level element)_

<a id="NonLinear_35" name="NonLinear_35"></a>
## Class NonLinear _extends_ VastElement

child of [NonLinearAds](#NonLinearAds_34) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```typescript
// Add a "StaticResource" child to current "NonLinear". Return "NonLinear" to stay on same current level.
addStaticResource(content: string, attributes: {
  creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")
}): NonLinear
```

↘ _go to [NonLinear](#NonLinear_35)_ _(current class)_

```typescript
// Attach a "StaticResource" child to current "NonLinear". Return "StaticResource" to move on child level.
attachStaticResource(content: string, attributes: {
  creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")
}): StaticResource
```

↘ _go to [StaticResource](#StaticResource_36)_ _(last level element)_

```typescript
// Add a "IFrameResource" child to current "NonLinear". Return "NonLinear" to stay on same current level.
addIFrameResource(content: string): NonLinear
```

↘ _go to [NonLinear](#NonLinear_35)_ _(current class)_

```typescript
// Attach a "IFrameResource" child to current "NonLinear". Return "IFrameResource" to move on child level.
attachIFrameResource(content: string): IFrameResource
```

↘ _go to [IFrameResource](#IFrameResource_37)_ _(last level element)_

```typescript
// Add a "HTMLResource" child to current "NonLinear". Return "NonLinear" to stay on same current level.
addHTMLResource(content: string): NonLinear
```

↘ _go to [NonLinear](#NonLinear_35)_ _(current class)_

```typescript
// Attach a "HTMLResource" child to current "NonLinear". Return "HTMLResource" to move on child level.
attachHTMLResource(content: string): HTMLResource
```

↘ _go to [HTMLResource](#HTMLResource_38)_ _(last level element)_

<a id="StaticResource_36" name="StaticResource_36"></a>
## Class StaticResource _extends_ VastElement

child of [NonLinear](#NonLinear_35) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="IFrameResource_37" name="IFrameResource_37"></a>
## Class IFrameResource _extends_ VastElement

child of [NonLinear](#NonLinear_35) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="HTMLResource_38" name="HTMLResource_38"></a>
## Class HTMLResource _extends_ VastElement

child of [NonLinear](#NonLinear_35) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="TrackingEvents_39" name="TrackingEvents_39"></a>
## Class TrackingEvents _extends_ VastElement

child of [NonLinearAds](#NonLinearAds_34) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```typescript
// Add a "Tracking" child to current "TrackingEvents". Return "TrackingEvents" to stay on same current level.
addTracking(content: string, attributes: {
  event:("creativeView"|"start"|"midpoint"|"firstQuartile"|"thirdQuartile"|"complete"|"mute"|"unmute"|"pause"|"rewind"|"resume"|"fullscreen"|"expand"|"collapse"|"acceptInvitation"|"close")
}): TrackingEvents
```

↘ _go to [TrackingEvents](#TrackingEvents_39)_ _(current class)_

```typescript
// Attach a "Tracking" child to current "TrackingEvents". Return "Tracking" to move on child level.
attachTracking(content: string, attributes: {
  event:("creativeView"|"start"|"midpoint"|"firstQuartile"|"thirdQuartile"|"complete"|"mute"|"unmute"|"pause"|"rewind"|"resume"|"fullscreen"|"expand"|"collapse"|"acceptInvitation"|"close")
}): Tracking
```

↘ _go to [Tracking](#Tracking_40)_ _(last level element)_

<a id="Tracking_40" name="Tracking_40"></a>
## Class Tracking _extends_ VastElement

child of [TrackingEvents](#TrackingEvents_39) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="NonLinearClickThrough_41" name="NonLinearClickThrough_41"></a>
## Class NonLinearClickThrough _extends_ VastElement

child of [NonLinearAds](#NonLinearAds_34) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="AdParameters_42" name="AdParameters_42"></a>
## Class AdParameters _extends_ VastElement

child of [NonLinearAds](#NonLinearAds_34) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Extensions_43" name="Extensions_43"></a>
## Class Extensions _extends_ VastElement

child of [InLine](#InLine_4) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```typescript
// Add a "Extension" child to current "Extensions". Return "Extensions" to stay on same current level.
addExtension(content: string, attributes: {
  type: string
}): Extensions
```

↘ _go to [Extensions](#Extensions_43)_ _(current class)_

```typescript
// Attach a "Extension" child to current "Extensions". Return "Extension" to move on child level.
attachExtension(content: string, attributes: {
  type: string
}): Extension
```

↘ _go to [Extension](#Extension_44)_ _(last level element)_

<a id="Extension_44" name="Extension_44"></a>
## Class Extension _extends_ VastElement

child of [Extensions](#Extensions_43) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Wrapper_45" name="Wrapper_45"></a>
## Class Wrapper _extends_ VastElement

child of [Ad](#Ad_3) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```typescript
// Add a "AdSystem" child to current "Wrapper". Return "Wrapper" to stay on same current level.
addAdSystem(content: string, attributes: {
  version: string
}): Wrapper
```

↘ _go to [Wrapper](#Wrapper_45)_ _(current class)_

```typescript
// Attach a "AdSystem" child to current "Wrapper". Return "AdSystem" to move on child level.
attachAdSystem(content: string, attributes: {
  version: string
}): AdSystem
```

↘ _go to [AdSystem](#AdSystem_46)_ _(last level element)_

```typescript
// Add a "VASTAdTagURI" child to current "Wrapper". Return "Wrapper" to stay on same current level.
addVASTAdTagURI(content: string): Wrapper
```

↘ _go to [Wrapper](#Wrapper_45)_ _(current class)_

```typescript
// Attach a "VASTAdTagURI" child to current "Wrapper". Return "VASTAdTagURI" to move on child level.
attachVASTAdTagURI(content: string): VASTAdTagURI
```

↘ _go to [VASTAdTagURI](#VASTAdTagURI_47)_ _(last level element)_

```typescript
// Add a "Error" child to current "Wrapper". Return "Wrapper" to stay on same current level.
addError(content: string): Wrapper
```

↘ _go to [Wrapper](#Wrapper_45)_ _(current class)_

```typescript
// Attach a "Error" child to current "Wrapper". Return "Error" to move on child level.
attachError(content: string): Error
```

↘ _go to [Error](#Error_48)_ _(last level element)_

```typescript
// Add a "Impression" child to current "Wrapper". Return "Wrapper" to stay on same current level.
addImpression(content: string, attributes: {
  id: string
}): Wrapper
```

↘ _go to [Wrapper](#Wrapper_45)_ _(current class)_

```typescript
// Attach a "Impression" child to current "Wrapper". Return "Impression" to move on child level.
attachImpression(content: string, attributes: {
  id: string
}): Impression
```

↘ _go to [Impression](#Impression_49)_ _(last level element)_

```typescript
// Attach a "Creatives" child to current "Wrapper". Return "Creatives" to move on child level.
attachCreatives(): Creatives
```

↘ _go to [Creatives](#Creatives_50)_

```typescript
// Attach a "Extensions" child to current "Wrapper". Return "Extensions" to move on child level.
attachExtensions(): Extensions
```

↘ _go to [Extensions](#Extensions_76)_

<a id="AdSystem_46" name="AdSystem_46"></a>
## Class AdSystem _extends_ VastElement

child of [Wrapper](#Wrapper_45) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="VASTAdTagURI_47" name="VASTAdTagURI_47"></a>
## Class VASTAdTagURI _extends_ VastElement

child of [Wrapper](#Wrapper_45) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Error_48" name="Error_48"></a>
## Class Error _extends_ VastElement

child of [Wrapper](#Wrapper_45) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Impression_49" name="Impression_49"></a>
## Class Impression _extends_ VastElement

child of [Wrapper](#Wrapper_45) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Creatives_50" name="Creatives_50"></a>
## Class Creatives _extends_ VastElement

child of [Wrapper](#Wrapper_45) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```typescript
// Attach a "Creative" child to current "Creatives". Return "Creative" to move on child level.
attachCreative(attributes: {
  id: string, 
  sequence: string, 
  adID: string
}): Creative
```

↘ _go to [Creative](#Creative_51)_

<a id="Creative_51" name="Creative_51"></a>
## Class Creative _extends_ VastElement

child of [Creatives](#Creatives_50) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```typescript
// Attach a "Linear" child to current "Creative". Return "Linear" to move on child level.
attachLinear(): Linear
```

↘ _go to [Linear](#Linear_52)_

```typescript
// Attach a "CompanionAds" child to current "Creative". Return "CompanionAds" to move on child level.
attachCompanionAds(): CompanionAds
```

↘ _go to [CompanionAds](#CompanionAds_59)_

```typescript
// Attach a "NonLinearAds" child to current "Creative". Return "NonLinearAds" to move on child level.
attachNonLinearAds(): NonLinearAds
```

↘ _go to [NonLinearAds](#NonLinearAds_69)_

<a id="Linear_52" name="Linear_52"></a>
## Class Linear _extends_ VastElement

child of [Creative](#Creative_51) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```typescript
// Attach a "TrackingEvents" child to current "Linear". Return "TrackingEvents" to move on child level.
attachTrackingEvents(): TrackingEvents
```

↘ _go to [TrackingEvents](#TrackingEvents_53)_

```typescript
// Attach a "VideoClicks" child to current "Linear". Return "VideoClicks" to move on child level.
attachVideoClicks(): VideoClicks
```

↘ _go to [VideoClicks](#VideoClicks_55)_

<a id="TrackingEvents_53" name="TrackingEvents_53"></a>
## Class TrackingEvents _extends_ VastElement

child of [Linear](#Linear_52) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```typescript
// Add a "Tracking" child to current "TrackingEvents". Return "TrackingEvents" to stay on same current level.
addTracking(content: string, attributes: {
  event:("creativeView"|"start"|"midpoint"|"firstQuartile"|"thirdQuartile"|"complete"|"mute"|"unmute"|"pause"|"rewind"|"resume"|"fullscreen"|"expand"|"collapse"|"acceptInvitation"|"close")
}): TrackingEvents
```

↘ _go to [TrackingEvents](#TrackingEvents_53)_ _(current class)_

```typescript
// Attach a "Tracking" child to current "TrackingEvents". Return "Tracking" to move on child level.
attachTracking(content: string, attributes: {
  event:("creativeView"|"start"|"midpoint"|"firstQuartile"|"thirdQuartile"|"complete"|"mute"|"unmute"|"pause"|"rewind"|"resume"|"fullscreen"|"expand"|"collapse"|"acceptInvitation"|"close")
}): Tracking
```

↘ _go to [Tracking](#Tracking_54)_ _(last level element)_

<a id="Tracking_54" name="Tracking_54"></a>
## Class Tracking _extends_ VastElement

child of [TrackingEvents](#TrackingEvents_53) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="VideoClicks_55" name="VideoClicks_55"></a>
## Class VideoClicks _extends_ VastElement

child of [Linear](#Linear_52) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```typescript
// Add a "ClickThrough" child to current "VideoClicks". Return "VideoClicks" to stay on same current level.
addClickThrough(content: string): VideoClicks
```

↘ _go to [VideoClicks](#VideoClicks_55)_ _(current class)_

```typescript
// Attach a "ClickThrough" child to current "VideoClicks". Return "ClickThrough" to move on child level.
attachClickThrough(content: string): ClickThrough
```

↘ _go to [ClickThrough](#ClickThrough_56)_ _(last level element)_

```typescript
// Add a "ClickTracking" child to current "VideoClicks". Return "VideoClicks" to stay on same current level.
addClickTracking(content: string): VideoClicks
```

↘ _go to [VideoClicks](#VideoClicks_55)_ _(current class)_

```typescript
// Attach a "ClickTracking" child to current "VideoClicks". Return "ClickTracking" to move on child level.
attachClickTracking(content: string): ClickTracking
```

↘ _go to [ClickTracking](#ClickTracking_57)_ _(last level element)_

```typescript
// Add a "CustomClick" child to current "VideoClicks". Return "VideoClicks" to stay on same current level.
addCustomClick(content: string, attributes: {
  id: string
}): VideoClicks
```

↘ _go to [VideoClicks](#VideoClicks_55)_ _(current class)_

```typescript
// Attach a "CustomClick" child to current "VideoClicks". Return "CustomClick" to move on child level.
attachCustomClick(content: string, attributes: {
  id: string
}): CustomClick
```

↘ _go to [CustomClick](#CustomClick_58)_ _(last level element)_

<a id="ClickThrough_56" name="ClickThrough_56"></a>
## Class ClickThrough _extends_ VastElement

child of [VideoClicks](#VideoClicks_55) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="ClickTracking_57" name="ClickTracking_57"></a>
## Class ClickTracking _extends_ VastElement

child of [VideoClicks](#VideoClicks_55) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="CustomClick_58" name="CustomClick_58"></a>
## Class CustomClick _extends_ VastElement

child of [VideoClicks](#VideoClicks_55) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="CompanionAds_59" name="CompanionAds_59"></a>
## Class CompanionAds _extends_ VastElement

child of [Creative](#Creative_51) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```typescript
// Attach a "Companion" child to current "CompanionAds". Return "Companion" to move on child level.
attachCompanion(attributes: {
  id: string, 
  width: string, 
  height: string, 
  expandedWidth: string, 
  expandedHeight: string, 
  apiFramework: string
}): Companion
```

↘ _go to [Companion](#Companion_60)_

<a id="Companion_60" name="Companion_60"></a>
## Class Companion _extends_ VastElement

child of [CompanionAds](#CompanionAds_59) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```typescript
// Add a "StaticResource" child to current "Companion". Return "Companion" to stay on same current level.
addStaticResource(content: string, attributes: {
  creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")
}): Companion
```

↘ _go to [Companion](#Companion_60)_ _(current class)_

```typescript
// Attach a "StaticResource" child to current "Companion". Return "StaticResource" to move on child level.
attachStaticResource(content: string, attributes: {
  creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")
}): StaticResource
```

↘ _go to [StaticResource](#StaticResource_61)_ _(last level element)_

```typescript
// Add a "IFrameResource" child to current "Companion". Return "Companion" to stay on same current level.
addIFrameResource(content: string): Companion
```

↘ _go to [Companion](#Companion_60)_ _(current class)_

```typescript
// Attach a "IFrameResource" child to current "Companion". Return "IFrameResource" to move on child level.
attachIFrameResource(content: string): IFrameResource
```

↘ _go to [IFrameResource](#IFrameResource_62)_ _(last level element)_

```typescript
// Add a "HTMLResource" child to current "Companion". Return "Companion" to stay on same current level.
addHTMLResource(content: string): Companion
```

↘ _go to [Companion](#Companion_60)_ _(current class)_

```typescript
// Attach a "HTMLResource" child to current "Companion". Return "HTMLResource" to move on child level.
attachHTMLResource(content: string): HTMLResource
```

↘ _go to [HTMLResource](#HTMLResource_63)_ _(last level element)_

```typescript
// Attach a "TrackingEvents" child to current "Companion". Return "TrackingEvents" to move on child level.
attachTrackingEvents(): TrackingEvents
```

↘ _go to [TrackingEvents](#TrackingEvents_64)_

```typescript
// Add a "CompanionClickThrough" child to current "Companion". Return "Companion" to stay on same current level.
addCompanionClickThrough(content: string): Companion
```

↘ _go to [Companion](#Companion_60)_ _(current class)_

```typescript
// Attach a "CompanionClickThrough" child to current "Companion". Return "CompanionClickThrough" to move on child level.
attachCompanionClickThrough(content: string): CompanionClickThrough
```

↘ _go to [CompanionClickThrough](#CompanionClickThrough_66)_ _(last level element)_

```typescript
// Add a "AltText" child to current "Companion". Return "Companion" to stay on same current level.
addAltText(content: string): Companion
```

↘ _go to [Companion](#Companion_60)_ _(current class)_

```typescript
// Attach a "AltText" child to current "Companion". Return "AltText" to move on child level.
attachAltText(content: string): AltText
```

↘ _go to [AltText](#AltText_67)_ _(last level element)_

```typescript
// Add a "AdParameters" child to current "Companion". Return "Companion" to stay on same current level.
addAdParameters(content: string): Companion
```

↘ _go to [Companion](#Companion_60)_ _(current class)_

```typescript
// Attach a "AdParameters" child to current "Companion". Return "AdParameters" to move on child level.
attachAdParameters(content: string): AdParameters
```

↘ _go to [AdParameters](#AdParameters_68)_ _(last level element)_

<a id="StaticResource_61" name="StaticResource_61"></a>
## Class StaticResource _extends_ VastElement

child of [Companion](#Companion_60) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="IFrameResource_62" name="IFrameResource_62"></a>
## Class IFrameResource _extends_ VastElement

child of [Companion](#Companion_60) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="HTMLResource_63" name="HTMLResource_63"></a>
## Class HTMLResource _extends_ VastElement

child of [Companion](#Companion_60) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="TrackingEvents_64" name="TrackingEvents_64"></a>
## Class TrackingEvents _extends_ VastElement

child of [Companion](#Companion_60) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```typescript
// Add a "Tracking" child to current "TrackingEvents". Return "TrackingEvents" to stay on same current level.
addTracking(content: string, attributes: {
  event:("creativeView")
}): TrackingEvents
```

↘ _go to [TrackingEvents](#TrackingEvents_64)_ _(current class)_

```typescript
// Attach a "Tracking" child to current "TrackingEvents". Return "Tracking" to move on child level.
attachTracking(content: string, attributes: {
  event:("creativeView")
}): Tracking
```

↘ _go to [Tracking](#Tracking_65)_ _(last level element)_

<a id="Tracking_65" name="Tracking_65"></a>
## Class Tracking _extends_ VastElement

child of [TrackingEvents](#TrackingEvents_64) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="CompanionClickThrough_66" name="CompanionClickThrough_66"></a>
## Class CompanionClickThrough _extends_ VastElement

child of [Companion](#Companion_60) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="AltText_67" name="AltText_67"></a>
## Class AltText _extends_ VastElement

child of [Companion](#Companion_60) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="AdParameters_68" name="AdParameters_68"></a>
## Class AdParameters _extends_ VastElement

child of [Companion](#Companion_60) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="NonLinearAds_69" name="NonLinearAds_69"></a>
## Class NonLinearAds _extends_ VastElement

child of [Creative](#Creative_51) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```typescript
// Attach a "NonLinear" child to current "NonLinearAds". Return "NonLinear" to move on child level.
attachNonLinear(attributes: {
  id: string, 
  width: string, 
  height: string, 
  expandedWidth: string, 
  expandedHeight: string, 
  scalable: string, 
  maintainAspectRatio: string, 
  minSuggestedDuration: string, 
  apiFramework: string
}): NonLinear
```

↘ _go to [NonLinear](#NonLinear_70)_

```typescript
// Attach a "TrackingEvents" child to current "NonLinearAds". Return "TrackingEvents" to move on child level.
attachTrackingEvents(): TrackingEvents
```

↘ _go to [TrackingEvents](#TrackingEvents_74)_

<a id="NonLinear_70" name="NonLinear_70"></a>
## Class NonLinear _extends_ VastElement

child of [NonLinearAds](#NonLinearAds_69) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```typescript
// Add a "StaticResource" child to current "NonLinear". Return "NonLinear" to stay on same current level.
addStaticResource(content: string, attributes: {
  creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")
}): NonLinear
```

↘ _go to [NonLinear](#NonLinear_70)_ _(current class)_

```typescript
// Attach a "StaticResource" child to current "NonLinear". Return "StaticResource" to move on child level.
attachStaticResource(content: string, attributes: {
  creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")
}): StaticResource
```

↘ _go to [StaticResource](#StaticResource_71)_ _(last level element)_

```typescript
// Add a "IFrameResource" child to current "NonLinear". Return "NonLinear" to stay on same current level.
addIFrameResource(content: string): NonLinear
```

↘ _go to [NonLinear](#NonLinear_70)_ _(current class)_

```typescript
// Attach a "IFrameResource" child to current "NonLinear". Return "IFrameResource" to move on child level.
attachIFrameResource(content: string): IFrameResource
```

↘ _go to [IFrameResource](#IFrameResource_72)_ _(last level element)_

```typescript
// Add a "HTMLResource" child to current "NonLinear". Return "NonLinear" to stay on same current level.
addHTMLResource(content: string): NonLinear
```

↘ _go to [NonLinear](#NonLinear_70)_ _(current class)_

```typescript
// Attach a "HTMLResource" child to current "NonLinear". Return "HTMLResource" to move on child level.
attachHTMLResource(content: string): HTMLResource
```

↘ _go to [HTMLResource](#HTMLResource_73)_ _(last level element)_

<a id="StaticResource_71" name="StaticResource_71"></a>
## Class StaticResource _extends_ VastElement

child of [NonLinear](#NonLinear_70) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="IFrameResource_72" name="IFrameResource_72"></a>
## Class IFrameResource _extends_ VastElement

child of [NonLinear](#NonLinear_70) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="HTMLResource_73" name="HTMLResource_73"></a>
## Class HTMLResource _extends_ VastElement

child of [NonLinear](#NonLinear_70) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="TrackingEvents_74" name="TrackingEvents_74"></a>
## Class TrackingEvents _extends_ VastElement

child of [NonLinearAds](#NonLinearAds_69) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```typescript
// Add a "Tracking" child to current "TrackingEvents". Return "TrackingEvents" to stay on same current level.
addTracking(content: string, attributes: {
  event:("creativeView"|"start"|"midpoint"|"firstQuartile"|"thirdQuartile"|"complete"|"mute"|"unmute"|"pause"|"rewind"|"resume"|"fullscreen"|"expand"|"collapse"|"acceptInvitation"|"close")
}): TrackingEvents
```

↘ _go to [TrackingEvents](#TrackingEvents_74)_ _(current class)_

```typescript
// Attach a "Tracking" child to current "TrackingEvents". Return "Tracking" to move on child level.
attachTracking(content: string, attributes: {
  event:("creativeView"|"start"|"midpoint"|"firstQuartile"|"thirdQuartile"|"complete"|"mute"|"unmute"|"pause"|"rewind"|"resume"|"fullscreen"|"expand"|"collapse"|"acceptInvitation"|"close")
}): Tracking
```

↘ _go to [Tracking](#Tracking_75)_ _(last level element)_

<a id="Tracking_75" name="Tracking_75"></a>
## Class Tracking _extends_ VastElement

child of [TrackingEvents](#TrackingEvents_74) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Extensions_76" name="Extensions_76"></a>
## Class Extensions _extends_ VastElement

child of [Wrapper](#Wrapper_45) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```typescript
// Add a "Extension" child to current "Extensions". Return "Extensions" to stay on same current level.
addExtension(content: string, attributes: {
  type: string
}): Extensions
```

↘ _go to [Extensions](#Extensions_76)_ _(current class)_

```typescript
// Attach a "Extension" child to current "Extensions". Return "Extension" to move on child level.
attachExtension(content: string, attributes: {
  type: string
}): Extension
```

↘ _go to [Extension](#Extension_77)_ _(last level element)_

<a id="Extension_77" name="Extension_77"></a>
## Class Extension _extends_ VastElement

child of [Extensions](#Extensions_76) ↗

_no specific methods see [VastElement](#VastElement)_