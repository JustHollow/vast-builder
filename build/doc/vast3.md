# VAST3 API Documentation
<a id="VastElement" name="VastElement"></a>
## Class VastElement

### methods


```js
// return the parent element
and(): VastElement
```

```js
// alias for .and().and()
back(): VastElement
```

```js
// turn element content into cdata. return the current element
cdata(): VastElement
```

```js
// Allow adding custom XML Tag, usefull for <Extensions>
dangerouslyAttachCustomTag(tagName: string, content: string, attributes: Object): VastElement
```

```js
// Allow adding custom XML Tag and return his parent, usefull for <Extensions>
dangerouslyAddCustomTag(tagName: string, content: string, attributes: Object): VastElement
```

```js
// Get filtered attributes (only specs valids one will be returned)
getAttrs(): Object
```

```js
// Return the generated Vast string
toXml(): string
```

```js
// return the current VAST api version
getVastVersion(): number
```

```js
// return an array all direct childs with "name"
getChilds(name: string): Array<VastElement>
```

```js
// validate your current vast build. print error if options.logWarn = true
validate(): boolean
```

<a id="apiv3" name="apiv3"></a>
## Class apiv3 _extends_ VastElement

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Attach a "VAST" child to current "apiv3". Return "VAST" to move on child level.
attachVAST(attributes: {
  version:("3.0") /* required */
}): VAST
```

↘ _go to [VAST](#VAST_3)_

<a id="VAST_3" name="VAST_3"></a>
## Class VAST _extends_ VastElement

This child once is the only one allowed at this level below apiv3 in VAST3 spec

child of [apiv3](#apiv3) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "Error" child to current "VAST". Return "VAST" to stay on same current level.
addError(content: string): VAST
```

↘ _go to [VAST](#VAST_3)_ _(current class)_

```js
// Attach a "Error" child to current "VAST". Return "Error" to move on child level.
attachError(content: string): Error
```

↘ _go to [Error](#Error_4)_ _(last level element)_

```js
// Attach a "Ad" child to current "VAST". Return "Ad" to move on child level.
attachAd(attributes: {
  id: string /* required */, 
  sequence: string /* required */
}): Ad
```

↘ _go to [Ad](#Ad_5)_

<a id="Error_4" name="Error_4"></a>
## Class Error _extends_ VastElement

child of [VAST](#VAST_3) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Ad_5" name="Ad_5"></a>
## Class Ad _extends_ VastElement

At last one of this child and/or others are required below VAST in VAST3 spec

child of [VAST](#VAST_3) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Attach a "InLine" child to current "Ad". Return "InLine" to move on child level.
attachInLine(): InLine
```

↘ _go to [InLine](#InLine_6)_

```js
// Attach a "Wrapper" child to current "Ad". Return "Wrapper" to move on child level.
attachWrapper(attributes: {
  followAdditonalWrappers: string /* required */, 
  allowMultipleAds: string /* required */, 
  fallbackOnNoAd: string /* required */
}): Wrapper
```

↘ _go to [Wrapper](#Wrapper_62)_

<a id="InLine_6" name="InLine_6"></a>
## Class InLine _extends_ VastElement

An uniq one of this child or others at same level are required below Ad in VAST3 spec

child of [Ad](#Ad_5) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "AdSystem" child to current "InLine". Return "InLine" to stay on same current level.
addAdSystem(content: string, attributes: {
  version: string /* required */
}): InLine
```

↘ _go to [InLine](#InLine_6)_ _(current class)_

```js
// Attach a "AdSystem" child to current "InLine". Return "AdSystem" to move on child level.
attachAdSystem(content: string, attributes: {
  version: string /* required */
}): AdSystem
```

↘ _go to [AdSystem](#AdSystem_7)_ _(last level element)_

```js
// Add a "AdTitle" child to current "InLine". Return "InLine" to stay on same current level.
addAdTitle(content: string): InLine
```

↘ _go to [InLine](#InLine_6)_ _(current class)_

```js
// Attach a "AdTitle" child to current "InLine". Return "AdTitle" to move on child level.
attachAdTitle(content: string): AdTitle
```

↘ _go to [AdTitle](#AdTitle_8)_ _(last level element)_

```js
// Add a "Description" child to current "InLine". Return "InLine" to stay on same current level.
addDescription(content: string): InLine
```

↘ _go to [InLine](#InLine_6)_ _(current class)_

```js
// Attach a "Description" child to current "InLine". Return "Description" to move on child level.
attachDescription(content: string): Description
```

↘ _go to [Description](#Description_9)_ _(last level element)_

```js
// Add a "Advertiser" child to current "InLine". Return "InLine" to stay on same current level.
addAdvertiser(content: string): InLine
```

↘ _go to [InLine](#InLine_6)_ _(current class)_

```js
// Attach a "Advertiser" child to current "InLine". Return "Advertiser" to move on child level.
attachAdvertiser(content: string): Advertiser
```

↘ _go to [Advertiser](#Advertiser_10)_ _(last level element)_

```js
// Add a "Pricing" child to current "InLine". Return "InLine" to stay on same current level.
addPricing(content: string, attributes: {
  currency: string /* required */, 
  model:("CPM"|"CPC"|"CPE"|"CPV") /* required */
}): InLine
```

↘ _go to [InLine](#InLine_6)_ _(current class)_

```js
// Attach a "Pricing" child to current "InLine". Return "Pricing" to move on child level.
attachPricing(content: string, attributes: {
  currency: string /* required */, 
  model:("CPM"|"CPC"|"CPE"|"CPV") /* required */
}): Pricing
```

↘ _go to [Pricing](#Pricing_11)_ _(last level element)_

```js
// Add a "Survey" child to current "InLine". Return "InLine" to stay on same current level.
addSurvey(content: string): InLine
```

↘ _go to [InLine](#InLine_6)_ _(current class)_

```js
// Attach a "Survey" child to current "InLine". Return "Survey" to move on child level.
attachSurvey(content: string): Survey
```

↘ _go to [Survey](#Survey_12)_ _(last level element)_

```js
// Add a "Error" child to current "InLine". Return "InLine" to stay on same current level.
addError(content: string): InLine
```

↘ _go to [InLine](#InLine_6)_ _(current class)_

```js
// Attach a "Error" child to current "InLine". Return "Error" to move on child level.
attachError(content: string): Error
```

↘ _go to [Error](#Error_13)_ _(last level element)_

```js
// Add a "Impression" child to current "InLine". Return "InLine" to stay on same current level.
addImpression(content: string, attributes: {
  id: string /* required */
}): InLine
```

↘ _go to [InLine](#InLine_6)_ _(current class)_

```js
// Attach a "Impression" child to current "InLine". Return "Impression" to move on child level.
attachImpression(content: string, attributes: {
  id: string /* required */
}): Impression
```

↘ _go to [Impression](#Impression_14)_ _(last level element)_

```js
// Attach a "Creatives" child to current "InLine". Return "Creatives" to move on child level.
attachCreatives(): Creatives
```

↘ _go to [Creatives](#Creatives_15)_

```js
// Attach a "Extensions" child to current "InLine". Return "Extensions" to move on child level.
attachExtensions(): Extensions
```

↘ _go to [Extensions](#Extensions_60)_

<a id="AdSystem_7" name="AdSystem_7"></a>
## Class AdSystem _extends_ VastElement

This child is required below InLine in VAST3 spec

child of [InLine](#InLine_6) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="AdTitle_8" name="AdTitle_8"></a>
## Class AdTitle _extends_ VastElement

This child is required below InLine in VAST3 spec

child of [InLine](#InLine_6) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Description_9" name="Description_9"></a>
## Class Description _extends_ VastElement

child of [InLine](#InLine_6) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Advertiser_10" name="Advertiser_10"></a>
## Class Advertiser _extends_ VastElement

child of [InLine](#InLine_6) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Pricing_11" name="Pricing_11"></a>
## Class Pricing _extends_ VastElement

child of [InLine](#InLine_6) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Survey_12" name="Survey_12"></a>
## Class Survey _extends_ VastElement

child of [InLine](#InLine_6) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Error_13" name="Error_13"></a>
## Class Error _extends_ VastElement

child of [InLine](#InLine_6) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Impression_14" name="Impression_14"></a>
## Class Impression _extends_ VastElement

At last one of this child and/or others are required below InLine in VAST3 spec

child of [InLine](#InLine_6) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Creatives_15" name="Creatives_15"></a>
## Class Creatives _extends_ VastElement

This child is required below InLine in VAST3 spec

child of [InLine](#InLine_6) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Attach a "Creative" child to current "Creatives". Return "Creative" to move on child level.
attachCreative(attributes: {
  id: string /* required */, 
  sequence: string /* required */, 
  adID: string /* required */, 
  apiFramework: string /* required */
}): Creative
```

↘ _go to [Creative](#Creative_16)_

<a id="Creative_16" name="Creative_16"></a>
## Class Creative _extends_ VastElement

At last one of this child and/or others are required below Creatives in VAST3 spec

child of [Creatives](#Creatives_15) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Attach a "CreativeExtensions" child to current "Creative". Return "CreativeExtensions" to move on child level.
attachCreativeExtensions(): CreativeExtensions
```

↘ _go to [CreativeExtensions](#CreativeExtensions_17)_

```js
// Attach a "Linear" child to current "Creative". Return "Linear" to move on child level.
attachLinear(attributes: {
  skipoffset: string /* required */
}): Linear
```

↘ _go to [Linear](#Linear_19)_

```js
// Attach a "CompanionAds" child to current "Creative". Return "CompanionAds" to move on child level.
attachCompanionAds(attributes: {
  required:("all"|"any"|"none") /* required */
}): CompanionAds
```

↘ _go to [CompanionAds](#CompanionAds_39)_

```js
// Attach a "NonLinearAds" child to current "Creative". Return "NonLinearAds" to move on child level.
attachNonLinearAds(): NonLinearAds
```

↘ _go to [NonLinearAds](#NonLinearAds_50)_

<a id="CreativeExtensions_17" name="CreativeExtensions_17"></a>
## Class CreativeExtensions _extends_ VastElement

child of [Creative](#Creative_16) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "CreativeExtension" child to current "CreativeExtensions". Return "CreativeExtensions" to stay on same current level.
addCreativeExtension(content: string): CreativeExtensions
```

↘ _go to [CreativeExtensions](#CreativeExtensions_17)_ _(current class)_

```js
// Attach a "CreativeExtension" child to current "CreativeExtensions". Return "CreativeExtension" to move on child level.
attachCreativeExtension(content: string): CreativeExtension
```

↘ _go to [CreativeExtension](#CreativeExtension_18)_ _(last level element)_

<a id="CreativeExtension_18" name="CreativeExtension_18"></a>
## Class CreativeExtension _extends_ VastElement

child of [CreativeExtensions](#CreativeExtensions_17) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Linear_19" name="Linear_19"></a>
## Class Linear _extends_ VastElement

An uniq one of this child or others at same level are required below Creative in VAST3 spec

child of [Creative](#Creative_16) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "AdParameters" child to current "Linear". Return "Linear" to stay on same current level.
addAdParameters(content: string, attributes: {
  xmlEncoded: string /* required */
}): Linear
```

↘ _go to [Linear](#Linear_19)_ _(current class)_

```js
// Attach a "AdParameters" child to current "Linear". Return "AdParameters" to move on child level.
attachAdParameters(content: string, attributes: {
  xmlEncoded: string /* required */
}): AdParameters
```

↘ _go to [AdParameters](#AdParameters_20)_ _(last level element)_

```js
// Add a "Duration" child to current "Linear". Return "Linear" to stay on same current level.
addDuration(content: string): Linear
```

↘ _go to [Linear](#Linear_19)_ _(current class)_

```js
// Attach a "Duration" child to current "Linear". Return "Duration" to move on child level.
attachDuration(content: string): Duration
```

↘ _go to [Duration](#Duration_21)_ _(last level element)_

```js
// Attach a "MediaFiles" child to current "Linear". Return "MediaFiles" to move on child level.
attachMediaFiles(): MediaFiles
```

↘ _go to [MediaFiles](#MediaFiles_22)_

```js
// Attach a "TrackingEvents" child to current "Linear". Return "TrackingEvents" to move on child level.
attachTrackingEvents(): TrackingEvents
```

↘ _go to [TrackingEvents](#TrackingEvents_24)_

```js
// Attach a "VideoClicks" child to current "Linear". Return "VideoClicks" to move on child level.
attachVideoClicks(): VideoClicks
```

↘ _go to [VideoClicks](#VideoClicks_26)_

```js
// Attach a "Icons" child to current "Linear". Return "Icons" to move on child level.
attachIcons(): Icons
```

↘ _go to [Icons](#Icons_30)_

<a id="AdParameters_20" name="AdParameters_20"></a>
## Class AdParameters _extends_ VastElement

child of [Linear](#Linear_19) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Duration_21" name="Duration_21"></a>
## Class Duration _extends_ VastElement

This child is required below Linear in VAST3 spec

child of [Linear](#Linear_19) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="MediaFiles_22" name="MediaFiles_22"></a>
## Class MediaFiles _extends_ VastElement

This child is required below Linear in VAST3 spec

child of [Linear](#Linear_19) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "MediaFile" child to current "MediaFiles". Return "MediaFiles" to stay on same current level.
addMediaFile(content: string, attributes: {
  id: string /* required */, 
  delivery:("progressive"|"streaming") /* required */, 
  type: string /* required */, 
  bitrate: string /* required */, 
  minBitrate: string /* required */, 
  maxBitrate: string /* required */, 
  width: string /* required */, 
  height: string /* required */, 
  scalable: string /* required */, 
  mantainAspectRatio: string /* required */, 
  codec: string /* required */, 
  apiFramework: string /* required */
}): MediaFiles
```

↘ _go to [MediaFiles](#MediaFiles_22)_ _(current class)_

```js
// Attach a "MediaFile" child to current "MediaFiles". Return "MediaFile" to move on child level.
attachMediaFile(content: string, attributes: {
  id: string /* required */, 
  delivery:("progressive"|"streaming") /* required */, 
  type: string /* required */, 
  bitrate: string /* required */, 
  minBitrate: string /* required */, 
  maxBitrate: string /* required */, 
  width: string /* required */, 
  height: string /* required */, 
  scalable: string /* required */, 
  mantainAspectRatio: string /* required */, 
  codec: string /* required */, 
  apiFramework: string /* required */
}): MediaFile
```

↘ _go to [MediaFile](#MediaFile_23)_ _(last level element)_

<a id="MediaFile_23" name="MediaFile_23"></a>
## Class MediaFile _extends_ VastElement

At last one of this child and/or others are required below MediaFiles in VAST3 spec

child of [MediaFiles](#MediaFiles_22) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="TrackingEvents_24" name="TrackingEvents_24"></a>
## Class TrackingEvents _extends_ VastElement

child of [Linear](#Linear_19) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "Tracking" child to current "TrackingEvents". Return "TrackingEvents" to stay on same current level.
addTracking(content: string, attributes: {
  event:("creativeView"|"start"|"firstQuartile"|"midpoint"|"thirdQuartile"|"complete"|"mute"|"unmute"|"pause"|"rewind"|"resume"|"fullscreen"|"exitFullscreen"|"expand"|"collapse"|"acceptInvitationLinear"|"closeLinear"|"skip"|"progress") /* required */
}): TrackingEvents
```

↘ _go to [TrackingEvents](#TrackingEvents_24)_ _(current class)_

```js
// Attach a "Tracking" child to current "TrackingEvents". Return "Tracking" to move on child level.
attachTracking(content: string, attributes: {
  event:("creativeView"|"start"|"firstQuartile"|"midpoint"|"thirdQuartile"|"complete"|"mute"|"unmute"|"pause"|"rewind"|"resume"|"fullscreen"|"exitFullscreen"|"expand"|"collapse"|"acceptInvitationLinear"|"closeLinear"|"skip"|"progress") /* required */
}): Tracking
```

↘ _go to [Tracking](#Tracking_25)_ _(last level element)_

<a id="Tracking_25" name="Tracking_25"></a>
## Class Tracking _extends_ VastElement

child of [TrackingEvents](#TrackingEvents_24) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="VideoClicks_26" name="VideoClicks_26"></a>
## Class VideoClicks _extends_ VastElement

child of [Linear](#Linear_19) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "ClickThrough" child to current "VideoClicks". Return "VideoClicks" to stay on same current level.
addClickThrough(content: string, attributes: {
  id: string /* required */
}): VideoClicks
```

↘ _go to [VideoClicks](#VideoClicks_26)_ _(current class)_

```js
// Attach a "ClickThrough" child to current "VideoClicks". Return "ClickThrough" to move on child level.
attachClickThrough(content: string, attributes: {
  id: string /* required */
}): ClickThrough
```

↘ _go to [ClickThrough](#ClickThrough_27)_ _(last level element)_

```js
// Add a "ClickTracking" child to current "VideoClicks". Return "VideoClicks" to stay on same current level.
addClickTracking(content: string, attributes: {
  id: string /* required */
}): VideoClicks
```

↘ _go to [VideoClicks](#VideoClicks_26)_ _(current class)_

```js
// Attach a "ClickTracking" child to current "VideoClicks". Return "ClickTracking" to move on child level.
attachClickTracking(content: string, attributes: {
  id: string /* required */
}): ClickTracking
```

↘ _go to [ClickTracking](#ClickTracking_28)_ _(last level element)_

```js
// Add a "CustomClick" child to current "VideoClicks". Return "VideoClicks" to stay on same current level.
addCustomClick(content: string, attributes: {
  id: string /* required */
}): VideoClicks
```

↘ _go to [VideoClicks](#VideoClicks_26)_ _(current class)_

```js
// Attach a "CustomClick" child to current "VideoClicks". Return "CustomClick" to move on child level.
attachCustomClick(content: string, attributes: {
  id: string /* required */
}): CustomClick
```

↘ _go to [CustomClick](#CustomClick_29)_ _(last level element)_

<a id="ClickThrough_27" name="ClickThrough_27"></a>
## Class ClickThrough _extends_ VastElement

child of [VideoClicks](#VideoClicks_26) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="ClickTracking_28" name="ClickTracking_28"></a>
## Class ClickTracking _extends_ VastElement

child of [VideoClicks](#VideoClicks_26) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="CustomClick_29" name="CustomClick_29"></a>
## Class CustomClick _extends_ VastElement

child of [VideoClicks](#VideoClicks_26) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Icons_30" name="Icons_30"></a>
## Class Icons _extends_ VastElement

child of [Linear](#Linear_19) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Attach a "Icon" child to current "Icons". Return "Icon" to move on child level.
attachIcon(attributes: {
  program: string /* required */, 
  width: string /* required */, 
  height: string /* required */, 
  xPosition: string /* required */, 
  yPosition: string /* required */, 
  duration: string /* required */, 
  offset: string /* required */, 
  apiFramework: string /* required */
}): Icon
```

↘ _go to [Icon](#Icon_31)_

<a id="Icon_31" name="Icon_31"></a>
## Class Icon _extends_ VastElement

At last one of this child and/or others are required below Icons in VAST3 spec

child of [Icons](#Icons_30) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "StaticResource" child to current "Icon". Return "Icon" to stay on same current level.
addStaticResource(content: string, attributes: {
  creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash") /* required */
}): Icon
```

↘ _go to [Icon](#Icon_31)_ _(current class)_

```js
// Attach a "StaticResource" child to current "Icon". Return "StaticResource" to move on child level.
attachStaticResource(content: string, attributes: {
  creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash") /* required */
}): StaticResource
```

↘ _go to [StaticResource](#StaticResource_32)_ _(last level element)_

```js
// Add a "IFrameResource" child to current "Icon". Return "Icon" to stay on same current level.
addIFrameResource(content: string): Icon
```

↘ _go to [Icon](#Icon_31)_ _(current class)_

```js
// Attach a "IFrameResource" child to current "Icon". Return "IFrameResource" to move on child level.
attachIFrameResource(content: string): IFrameResource
```

↘ _go to [IFrameResource](#IFrameResource_33)_ _(last level element)_

```js
// Add a "HTMLResource" child to current "Icon". Return "Icon" to stay on same current level.
addHTMLResource(content: string): Icon
```

↘ _go to [Icon](#Icon_31)_ _(current class)_

```js
// Attach a "HTMLResource" child to current "Icon". Return "HTMLResource" to move on child level.
attachHTMLResource(content: string): HTMLResource
```

↘ _go to [HTMLResource](#HTMLResource_34)_ _(last level element)_

```js
// Attach a "IconClicks" child to current "Icon". Return "IconClicks" to move on child level.
attachIconClicks(): IconClicks
```

↘ _go to [IconClicks](#IconClicks_35)_

```js
// Add a "IconViewTracking" child to current "Icon". Return "Icon" to stay on same current level.
addIconViewTracking(content: string): Icon
```

↘ _go to [Icon](#Icon_31)_ _(current class)_

```js
// Attach a "IconViewTracking" child to current "Icon". Return "IconViewTracking" to move on child level.
attachIconViewTracking(content: string): IconViewTracking
```

↘ _go to [IconViewTracking](#IconViewTracking_38)_ _(last level element)_

<a id="StaticResource_32" name="StaticResource_32"></a>
## Class StaticResource _extends_ VastElement

At last one of this child and/or others are required below Icon in VAST3 spec

child of [Icon](#Icon_31) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="IFrameResource_33" name="IFrameResource_33"></a>
## Class IFrameResource _extends_ VastElement

At last one of this child and/or others are required below Icon in VAST3 spec

child of [Icon](#Icon_31) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="HTMLResource_34" name="HTMLResource_34"></a>
## Class HTMLResource _extends_ VastElement

At last one of this child and/or others are required below Icon in VAST3 spec

child of [Icon](#Icon_31) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="IconClicks_35" name="IconClicks_35"></a>
## Class IconClicks _extends_ VastElement

child of [Icon](#Icon_31) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "IconClickThrough" child to current "IconClicks". Return "IconClicks" to stay on same current level.
addIconClickThrough(content: string): IconClicks
```

↘ _go to [IconClicks](#IconClicks_35)_ _(current class)_

```js
// Attach a "IconClickThrough" child to current "IconClicks". Return "IconClickThrough" to move on child level.
attachIconClickThrough(content: string): IconClickThrough
```

↘ _go to [IconClickThrough](#IconClickThrough_36)_ _(last level element)_

```js
// Add a "IconClickTracking" child to current "IconClicks". Return "IconClicks" to stay on same current level.
addIconClickTracking(content: string, attributes: {
  id: string /* required */
}): IconClicks
```

↘ _go to [IconClicks](#IconClicks_35)_ _(current class)_

```js
// Attach a "IconClickTracking" child to current "IconClicks". Return "IconClickTracking" to move on child level.
attachIconClickTracking(content: string, attributes: {
  id: string /* required */
}): IconClickTracking
```

↘ _go to [IconClickTracking](#IconClickTracking_37)_ _(last level element)_

<a id="IconClickThrough_36" name="IconClickThrough_36"></a>
## Class IconClickThrough _extends_ VastElement

child of [IconClicks](#IconClicks_35) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="IconClickTracking_37" name="IconClickTracking_37"></a>
## Class IconClickTracking _extends_ VastElement

child of [IconClicks](#IconClicks_35) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="IconViewTracking_38" name="IconViewTracking_38"></a>
## Class IconViewTracking _extends_ VastElement

child of [Icon](#Icon_31) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="CompanionAds_39" name="CompanionAds_39"></a>
## Class CompanionAds _extends_ VastElement

An uniq one of this child or others at same level are required below Creative in VAST3 spec

child of [Creative](#Creative_16) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Attach a "Companion" child to current "CompanionAds". Return "Companion" to move on child level.
attachCompanion(attributes: {
  id: string /* required */, 
  width: string /* required */, 
  height: string /* required */, 
  assetWidth: string /* required */, 
  assetHeight: string /* required */, 
  expandedWidth: string /* required */, 
  expandedHeight: string /* required */, 
  apiFramework: string /* required */, 
  adSlotID: string /* required */
}): Companion
```

↘ _go to [Companion](#Companion_40)_

<a id="Companion_40" name="Companion_40"></a>
## Class Companion _extends_ VastElement

child of [CompanionAds](#CompanionAds_39) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "StaticResource" child to current "Companion". Return "Companion" to stay on same current level.
addStaticResource(content: string, attributes: {
  creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash") /* required */
}): Companion
```

↘ _go to [Companion](#Companion_40)_ _(current class)_

```js
// Attach a "StaticResource" child to current "Companion". Return "StaticResource" to move on child level.
attachStaticResource(content: string, attributes: {
  creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash") /* required */
}): StaticResource
```

↘ _go to [StaticResource](#StaticResource_41)_ _(last level element)_

```js
// Add a "IFrameResource" child to current "Companion". Return "Companion" to stay on same current level.
addIFrameResource(content: string): Companion
```

↘ _go to [Companion](#Companion_40)_ _(current class)_

```js
// Attach a "IFrameResource" child to current "Companion". Return "IFrameResource" to move on child level.
attachIFrameResource(content: string): IFrameResource
```

↘ _go to [IFrameResource](#IFrameResource_42)_ _(last level element)_

```js
// Add a "HTMLResource" child to current "Companion". Return "Companion" to stay on same current level.
addHTMLResource(content: string): Companion
```

↘ _go to [Companion](#Companion_40)_ _(current class)_

```js
// Attach a "HTMLResource" child to current "Companion". Return "HTMLResource" to move on child level.
attachHTMLResource(content: string): HTMLResource
```

↘ _go to [HTMLResource](#HTMLResource_43)_ _(last level element)_

```js
// Add a "AdParameters" child to current "Companion". Return "Companion" to stay on same current level.
addAdParameters(content: string, attributes: {
  xmlEncoded: string /* required */
}): Companion
```

↘ _go to [Companion](#Companion_40)_ _(current class)_

```js
// Attach a "AdParameters" child to current "Companion". Return "AdParameters" to move on child level.
attachAdParameters(content: string, attributes: {
  xmlEncoded: string /* required */
}): AdParameters
```

↘ _go to [AdParameters](#AdParameters_44)_ _(last level element)_

```js
// Add a "AltText" child to current "Companion". Return "Companion" to stay on same current level.
addAltText(content: string): Companion
```

↘ _go to [Companion](#Companion_40)_ _(current class)_

```js
// Attach a "AltText" child to current "Companion". Return "AltText" to move on child level.
attachAltText(content: string): AltText
```

↘ _go to [AltText](#AltText_45)_ _(last level element)_

```js
// Add a "CompanionClickThrough" child to current "Companion". Return "Companion" to stay on same current level.
addCompanionClickThrough(content: string): Companion
```

↘ _go to [Companion](#Companion_40)_ _(current class)_

```js
// Attach a "CompanionClickThrough" child to current "Companion". Return "CompanionClickThrough" to move on child level.
attachCompanionClickThrough(content: string): CompanionClickThrough
```

↘ _go to [CompanionClickThrough](#CompanionClickThrough_46)_ _(last level element)_

```js
// Add a "CompanionClickTracking" child to current "Companion". Return "Companion" to stay on same current level.
addCompanionClickTracking(content: string, attributes: {
  id: string /* required */
}): Companion
```

↘ _go to [Companion](#Companion_40)_ _(current class)_

```js
// Attach a "CompanionClickTracking" child to current "Companion". Return "CompanionClickTracking" to move on child level.
attachCompanionClickTracking(content: string, attributes: {
  id: string /* required */
}): CompanionClickTracking
```

↘ _go to [CompanionClickTracking](#CompanionClickTracking_47)_ _(last level element)_

```js
// Attach a "TrackingEvents" child to current "Companion". Return "TrackingEvents" to move on child level.
attachTrackingEvents(): TrackingEvents
```

↘ _go to [TrackingEvents](#TrackingEvents_48)_

<a id="StaticResource_41" name="StaticResource_41"></a>
## Class StaticResource _extends_ VastElement

At last one of this child and/or others are required below Companion in VAST3 spec

child of [Companion](#Companion_40) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="IFrameResource_42" name="IFrameResource_42"></a>
## Class IFrameResource _extends_ VastElement

At last one of this child and/or others are required below Companion in VAST3 spec

child of [Companion](#Companion_40) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="HTMLResource_43" name="HTMLResource_43"></a>
## Class HTMLResource _extends_ VastElement

At last one of this child and/or others are required below Companion in VAST3 spec

child of [Companion](#Companion_40) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="AdParameters_44" name="AdParameters_44"></a>
## Class AdParameters _extends_ VastElement

child of [Companion](#Companion_40) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="AltText_45" name="AltText_45"></a>
## Class AltText _extends_ VastElement

child of [Companion](#Companion_40) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="CompanionClickThrough_46" name="CompanionClickThrough_46"></a>
## Class CompanionClickThrough _extends_ VastElement

child of [Companion](#Companion_40) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="CompanionClickTracking_47" name="CompanionClickTracking_47"></a>
## Class CompanionClickTracking _extends_ VastElement

child of [Companion](#Companion_40) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="TrackingEvents_48" name="TrackingEvents_48"></a>
## Class TrackingEvents _extends_ VastElement

child of [Companion](#Companion_40) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "Tracking" child to current "TrackingEvents". Return "TrackingEvents" to stay on same current level.
addTracking(content: string, attributes: {
  event:("creativeView") /* required */
}): TrackingEvents
```

↘ _go to [TrackingEvents](#TrackingEvents_48)_ _(current class)_

```js
// Attach a "Tracking" child to current "TrackingEvents". Return "Tracking" to move on child level.
attachTracking(content: string, attributes: {
  event:("creativeView") /* required */
}): Tracking
```

↘ _go to [Tracking](#Tracking_49)_ _(last level element)_

<a id="Tracking_49" name="Tracking_49"></a>
## Class Tracking _extends_ VastElement

child of [TrackingEvents](#TrackingEvents_48) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="NonLinearAds_50" name="NonLinearAds_50"></a>
## Class NonLinearAds _extends_ VastElement

An uniq one of this child or others at same level are required below Creative in VAST3 spec

child of [Creative](#Creative_16) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Attach a "NonLinear" child to current "NonLinearAds". Return "NonLinear" to move on child level.
attachNonLinear(attributes: {
  id: string /* required */, 
  width: string /* required */, 
  height: string /* required */, 
  expandedWidth: string /* required */, 
  expandedHeight: string /* required */, 
  scalable: string /* required */, 
  maintainAspectRatio: string /* required */, 
  minSuggestedDuration: string /* required */, 
  apiFramework: string /* required */
}): NonLinear
```

↘ _go to [NonLinear](#NonLinear_51)_

```js
// Attach a "TrackingEvents" child to current "NonLinearAds". Return "TrackingEvents" to move on child level.
attachTrackingEvents(): TrackingEvents
```

↘ _go to [TrackingEvents](#TrackingEvents_58)_

<a id="NonLinear_51" name="NonLinear_51"></a>
## Class NonLinear _extends_ VastElement

child of [NonLinearAds](#NonLinearAds_50) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "StaticResource" child to current "NonLinear". Return "NonLinear" to stay on same current level.
addStaticResource(content: string, attributes: {
  creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash") /* required */
}): NonLinear
```

↘ _go to [NonLinear](#NonLinear_51)_ _(current class)_

```js
// Attach a "StaticResource" child to current "NonLinear". Return "StaticResource" to move on child level.
attachStaticResource(content: string, attributes: {
  creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash") /* required */
}): StaticResource
```

↘ _go to [StaticResource](#StaticResource_52)_ _(last level element)_

```js
// Add a "IFrameResource" child to current "NonLinear". Return "NonLinear" to stay on same current level.
addIFrameResource(content: string): NonLinear
```

↘ _go to [NonLinear](#NonLinear_51)_ _(current class)_

```js
// Attach a "IFrameResource" child to current "NonLinear". Return "IFrameResource" to move on child level.
attachIFrameResource(content: string): IFrameResource
```

↘ _go to [IFrameResource](#IFrameResource_53)_ _(last level element)_

```js
// Add a "HTMLResource" child to current "NonLinear". Return "NonLinear" to stay on same current level.
addHTMLResource(content: string): NonLinear
```

↘ _go to [NonLinear](#NonLinear_51)_ _(current class)_

```js
// Attach a "HTMLResource" child to current "NonLinear". Return "HTMLResource" to move on child level.
attachHTMLResource(content: string): HTMLResource
```

↘ _go to [HTMLResource](#HTMLResource_54)_ _(last level element)_

```js
// Add a "NonLinearClickThrough" child to current "NonLinear". Return "NonLinear" to stay on same current level.
addNonLinearClickThrough(content: string): NonLinear
```

↘ _go to [NonLinear](#NonLinear_51)_ _(current class)_

```js
// Attach a "NonLinearClickThrough" child to current "NonLinear". Return "NonLinearClickThrough" to move on child level.
attachNonLinearClickThrough(content: string): NonLinearClickThrough
```

↘ _go to [NonLinearClickThrough](#NonLinearClickThrough_55)_ _(last level element)_

```js
// Add a "NonLinearClickTracking" child to current "NonLinear". Return "NonLinear" to stay on same current level.
addNonLinearClickTracking(content: string, attributes: {
  id: string /* required */
}): NonLinear
```

↘ _go to [NonLinear](#NonLinear_51)_ _(current class)_

```js
// Attach a "NonLinearClickTracking" child to current "NonLinear". Return "NonLinearClickTracking" to move on child level.
attachNonLinearClickTracking(content: string, attributes: {
  id: string /* required */
}): NonLinearClickTracking
```

↘ _go to [NonLinearClickTracking](#NonLinearClickTracking_56)_ _(last level element)_

```js
// Add a "AdParameters" child to current "NonLinear". Return "NonLinear" to stay on same current level.
addAdParameters(content: string, attributes: {
  xmlEncoded: string /* required */
}): NonLinear
```

↘ _go to [NonLinear](#NonLinear_51)_ _(current class)_

```js
// Attach a "AdParameters" child to current "NonLinear". Return "AdParameters" to move on child level.
attachAdParameters(content: string, attributes: {
  xmlEncoded: string /* required */
}): AdParameters
```

↘ _go to [AdParameters](#AdParameters_57)_ _(last level element)_

<a id="StaticResource_52" name="StaticResource_52"></a>
## Class StaticResource _extends_ VastElement

At last one of this child and/or others are required below NonLinear in VAST3 spec

child of [NonLinear](#NonLinear_51) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="IFrameResource_53" name="IFrameResource_53"></a>
## Class IFrameResource _extends_ VastElement

At last one of this child and/or others are required below NonLinear in VAST3 spec

child of [NonLinear](#NonLinear_51) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="HTMLResource_54" name="HTMLResource_54"></a>
## Class HTMLResource _extends_ VastElement

At last one of this child and/or others are required below NonLinear in VAST3 spec

child of [NonLinear](#NonLinear_51) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="NonLinearClickThrough_55" name="NonLinearClickThrough_55"></a>
## Class NonLinearClickThrough _extends_ VastElement

child of [NonLinear](#NonLinear_51) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="NonLinearClickTracking_56" name="NonLinearClickTracking_56"></a>
## Class NonLinearClickTracking _extends_ VastElement

child of [NonLinear](#NonLinear_51) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="AdParameters_57" name="AdParameters_57"></a>
## Class AdParameters _extends_ VastElement

child of [NonLinear](#NonLinear_51) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="TrackingEvents_58" name="TrackingEvents_58"></a>
## Class TrackingEvents _extends_ VastElement

child of [NonLinearAds](#NonLinearAds_50) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "Tracking" child to current "TrackingEvents". Return "TrackingEvents" to stay on same current level.
addTracking(content: string, attributes: {
  event:("creativeView"|"start"|"firstQuartile"|"midpoint"|"thirdQuartile"|"complete"|"mute"|"unmute"|"pause"|"rewind"|"resume"|"fullscreen"|"exitFullscreen"|"expand"|"collapse"|"acceptInvitation"|"close"|"progress") /* required */
}): TrackingEvents
```

↘ _go to [TrackingEvents](#TrackingEvents_58)_ _(current class)_

```js
// Attach a "Tracking" child to current "TrackingEvents". Return "Tracking" to move on child level.
attachTracking(content: string, attributes: {
  event:("creativeView"|"start"|"firstQuartile"|"midpoint"|"thirdQuartile"|"complete"|"mute"|"unmute"|"pause"|"rewind"|"resume"|"fullscreen"|"exitFullscreen"|"expand"|"collapse"|"acceptInvitation"|"close"|"progress") /* required */
}): Tracking
```

↘ _go to [Tracking](#Tracking_59)_ _(last level element)_

<a id="Tracking_59" name="Tracking_59"></a>
## Class Tracking _extends_ VastElement

child of [TrackingEvents](#TrackingEvents_58) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Extensions_60" name="Extensions_60"></a>
## Class Extensions _extends_ VastElement

child of [InLine](#InLine_6) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "Extension" child to current "Extensions". Return "Extensions" to stay on same current level.
addExtension(content: string, attributes: {
  type: string /* required */
}): Extensions
```

↘ _go to [Extensions](#Extensions_60)_ _(current class)_

```js
// Attach a "Extension" child to current "Extensions". Return "Extension" to move on child level.
attachExtension(content: string, attributes: {
  type: string /* required */
}): Extension
```

↘ _go to [Extension](#Extension_61)_ _(last level element)_

<a id="Extension_61" name="Extension_61"></a>
## Class Extension _extends_ VastElement

This child is required below Extensions in VAST3 spec

child of [Extensions](#Extensions_60) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Wrapper_62" name="Wrapper_62"></a>
## Class Wrapper _extends_ VastElement

An uniq one of this child or others at same level are required below Ad in VAST3 spec

child of [Ad](#Ad_5) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "AdSystem" child to current "Wrapper". Return "Wrapper" to stay on same current level.
addAdSystem(content: string, attributes: {
  version: string /* required */
}): Wrapper
```

↘ _go to [Wrapper](#Wrapper_62)_ _(current class)_

```js
// Attach a "AdSystem" child to current "Wrapper". Return "AdSystem" to move on child level.
attachAdSystem(content: string, attributes: {
  version: string /* required */
}): AdSystem
```

↘ _go to [AdSystem](#AdSystem_63)_ _(last level element)_

```js
// Add a "VASTAdTagURI" child to current "Wrapper". Return "Wrapper" to stay on same current level.
addVASTAdTagURI(content: string): Wrapper
```

↘ _go to [Wrapper](#Wrapper_62)_ _(current class)_

```js
// Attach a "VASTAdTagURI" child to current "Wrapper". Return "VASTAdTagURI" to move on child level.
attachVASTAdTagURI(content: string): VASTAdTagURI
```

↘ _go to [VASTAdTagURI](#VASTAdTagURI_64)_ _(last level element)_

```js
// Add a "Error" child to current "Wrapper". Return "Wrapper" to stay on same current level.
addError(content: string): Wrapper
```

↘ _go to [Wrapper](#Wrapper_62)_ _(current class)_

```js
// Attach a "Error" child to current "Wrapper". Return "Error" to move on child level.
attachError(content: string): Error
```

↘ _go to [Error](#Error_65)_ _(last level element)_

```js
// Add a "Impression" child to current "Wrapper". Return "Wrapper" to stay on same current level.
addImpression(content: string, attributes: {
  id: string /* required */
}): Wrapper
```

↘ _go to [Wrapper](#Wrapper_62)_ _(current class)_

```js
// Attach a "Impression" child to current "Wrapper". Return "Impression" to move on child level.
attachImpression(content: string, attributes: {
  id: string /* required */
}): Impression
```

↘ _go to [Impression](#Impression_66)_ _(last level element)_

```js
// Attach a "Creatives" child to current "Wrapper". Return "Creatives" to move on child level.
attachCreatives(): Creatives
```

↘ _go to [Creatives](#Creatives_67)_

```js
// Attach a "Extensions" child to current "Wrapper". Return "Extensions" to move on child level.
attachExtensions(): Extensions
```

↘ _go to [Extensions](#Extensions_100)_

<a id="AdSystem_63" name="AdSystem_63"></a>
## Class AdSystem _extends_ VastElement

This child is required below Wrapper in VAST3 spec

child of [Wrapper](#Wrapper_62) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="VASTAdTagURI_64" name="VASTAdTagURI_64"></a>
## Class VASTAdTagURI _extends_ VastElement

This child is required below Wrapper in VAST3 spec

child of [Wrapper](#Wrapper_62) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Error_65" name="Error_65"></a>
## Class Error _extends_ VastElement

child of [Wrapper](#Wrapper_62) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Impression_66" name="Impression_66"></a>
## Class Impression _extends_ VastElement

At last one of this child and/or others are required below Wrapper in VAST3 spec

child of [Wrapper](#Wrapper_62) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Creatives_67" name="Creatives_67"></a>
## Class Creatives _extends_ VastElement

child of [Wrapper](#Wrapper_62) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Attach a "Creative" child to current "Creatives". Return "Creative" to move on child level.
attachCreative(attributes: {
  id: string /* required */, 
  sequence: string /* required */, 
  adID: string /* required */
}): Creative
```

↘ _go to [Creative](#Creative_68)_

<a id="Creative_68" name="Creative_68"></a>
## Class Creative _extends_ VastElement

child of [Creatives](#Creatives_67) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Attach a "Linear" child to current "Creative". Return "Linear" to move on child level.
attachLinear(): Linear
```

↘ _go to [Linear](#Linear_69)_

```js
// Attach a "CompanionAds" child to current "Creative". Return "CompanionAds" to move on child level.
attachCompanionAds(attributes: {
  required:("all"|"any"|"none") /* required */
}): CompanionAds
```

↘ _go to [CompanionAds](#CompanionAds_84)_

```js
// Attach a "NonLinearAds" child to current "Creative". Return "NonLinearAds" to move on child level.
attachNonLinearAds(): NonLinearAds
```

↘ _go to [NonLinearAds](#NonLinearAds_95)_

<a id="Linear_69" name="Linear_69"></a>
## Class Linear _extends_ VastElement

An uniq one of this child or others at same level are required below Creative in VAST3 spec

child of [Creative](#Creative_68) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Attach a "TrackingEvents" child to current "Linear". Return "TrackingEvents" to move on child level.
attachTrackingEvents(): TrackingEvents
```

↘ _go to [TrackingEvents](#TrackingEvents_70)_

```js
// Attach a "VideoClicks" child to current "Linear". Return "VideoClicks" to move on child level.
attachVideoClicks(): VideoClicks
```

↘ _go to [VideoClicks](#VideoClicks_72)_

```js
// Attach a "Icons" child to current "Linear". Return "Icons" to move on child level.
attachIcons(): Icons
```

↘ _go to [Icons](#Icons_75)_

<a id="TrackingEvents_70" name="TrackingEvents_70"></a>
## Class TrackingEvents _extends_ VastElement

child of [Linear](#Linear_69) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "Tracking" child to current "TrackingEvents". Return "TrackingEvents" to stay on same current level.
addTracking(content: string, attributes: {
  event:("creativeView"|"start"|"firstQuartile"|"midpoint"|"thirdQuartile"|"complete"|"mute"|"unmute"|"pause"|"rewind"|"resume"|"fullscreen"|"exitFullscreen"|"expand"|"collapse"|"acceptInvitationLinear"|"closeLinear"|"skip"|"progress") /* required */
}): TrackingEvents
```

↘ _go to [TrackingEvents](#TrackingEvents_70)_ _(current class)_

```js
// Attach a "Tracking" child to current "TrackingEvents". Return "Tracking" to move on child level.
attachTracking(content: string, attributes: {
  event:("creativeView"|"start"|"firstQuartile"|"midpoint"|"thirdQuartile"|"complete"|"mute"|"unmute"|"pause"|"rewind"|"resume"|"fullscreen"|"exitFullscreen"|"expand"|"collapse"|"acceptInvitationLinear"|"closeLinear"|"skip"|"progress") /* required */
}): Tracking
```

↘ _go to [Tracking](#Tracking_71)_ _(last level element)_

<a id="Tracking_71" name="Tracking_71"></a>
## Class Tracking _extends_ VastElement

child of [TrackingEvents](#TrackingEvents_70) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="VideoClicks_72" name="VideoClicks_72"></a>
## Class VideoClicks _extends_ VastElement

child of [Linear](#Linear_69) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "ClickTracking" child to current "VideoClicks". Return "VideoClicks" to stay on same current level.
addClickTracking(content: string, attributes: {
  id: string /* required */
}): VideoClicks
```

↘ _go to [VideoClicks](#VideoClicks_72)_ _(current class)_

```js
// Attach a "ClickTracking" child to current "VideoClicks". Return "ClickTracking" to move on child level.
attachClickTracking(content: string, attributes: {
  id: string /* required */
}): ClickTracking
```

↘ _go to [ClickTracking](#ClickTracking_73)_ _(last level element)_

```js
// Add a "CustomClick" child to current "VideoClicks". Return "VideoClicks" to stay on same current level.
addCustomClick(content: string, attributes: {
  id: string /* required */
}): VideoClicks
```

↘ _go to [VideoClicks](#VideoClicks_72)_ _(current class)_

```js
// Attach a "CustomClick" child to current "VideoClicks". Return "CustomClick" to move on child level.
attachCustomClick(content: string, attributes: {
  id: string /* required */
}): CustomClick
```

↘ _go to [CustomClick](#CustomClick_74)_ _(last level element)_

<a id="ClickTracking_73" name="ClickTracking_73"></a>
## Class ClickTracking _extends_ VastElement

child of [VideoClicks](#VideoClicks_72) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="CustomClick_74" name="CustomClick_74"></a>
## Class CustomClick _extends_ VastElement

child of [VideoClicks](#VideoClicks_72) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Icons_75" name="Icons_75"></a>
## Class Icons _extends_ VastElement

child of [Linear](#Linear_69) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Attach a "Icon" child to current "Icons". Return "Icon" to move on child level.
attachIcon(attributes: {
  program: string /* required */, 
  width: string /* required */, 
  height: string /* required */, 
  xPosition: string /* required */, 
  yPosition: string /* required */, 
  duration: string /* required */, 
  offset: string /* required */, 
  apiFramework: string /* required */
}): Icon
```

↘ _go to [Icon](#Icon_76)_

<a id="Icon_76" name="Icon_76"></a>
## Class Icon _extends_ VastElement

At last one of this child and/or others are required below Icons in VAST3 spec

child of [Icons](#Icons_75) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "StaticResource" child to current "Icon". Return "Icon" to stay on same current level.
addStaticResource(content: string, attributes: {
  creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash") /* required */
}): Icon
```

↘ _go to [Icon](#Icon_76)_ _(current class)_

```js
// Attach a "StaticResource" child to current "Icon". Return "StaticResource" to move on child level.
attachStaticResource(content: string, attributes: {
  creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash") /* required */
}): StaticResource
```

↘ _go to [StaticResource](#StaticResource_77)_ _(last level element)_

```js
// Add a "IFrameResource" child to current "Icon". Return "Icon" to stay on same current level.
addIFrameResource(content: string): Icon
```

↘ _go to [Icon](#Icon_76)_ _(current class)_

```js
// Attach a "IFrameResource" child to current "Icon". Return "IFrameResource" to move on child level.
attachIFrameResource(content: string): IFrameResource
```

↘ _go to [IFrameResource](#IFrameResource_78)_ _(last level element)_

```js
// Add a "HTMLResource" child to current "Icon". Return "Icon" to stay on same current level.
addHTMLResource(content: string): Icon
```

↘ _go to [Icon](#Icon_76)_ _(current class)_

```js
// Attach a "HTMLResource" child to current "Icon". Return "HTMLResource" to move on child level.
attachHTMLResource(content: string): HTMLResource
```

↘ _go to [HTMLResource](#HTMLResource_79)_ _(last level element)_

```js
// Attach a "IconClicks" child to current "Icon". Return "IconClicks" to move on child level.
attachIconClicks(): IconClicks
```

↘ _go to [IconClicks](#IconClicks_80)_

```js
// Add a "IconViewTracking" child to current "Icon". Return "Icon" to stay on same current level.
addIconViewTracking(content: string): Icon
```

↘ _go to [Icon](#Icon_76)_ _(current class)_

```js
// Attach a "IconViewTracking" child to current "Icon". Return "IconViewTracking" to move on child level.
attachIconViewTracking(content: string): IconViewTracking
```

↘ _go to [IconViewTracking](#IconViewTracking_83)_ _(last level element)_

<a id="StaticResource_77" name="StaticResource_77"></a>
## Class StaticResource _extends_ VastElement

At last one of this child and/or others are required below Icon in VAST3 spec

child of [Icon](#Icon_76) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="IFrameResource_78" name="IFrameResource_78"></a>
## Class IFrameResource _extends_ VastElement

At last one of this child and/or others are required below Icon in VAST3 spec

child of [Icon](#Icon_76) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="HTMLResource_79" name="HTMLResource_79"></a>
## Class HTMLResource _extends_ VastElement

At last one of this child and/or others are required below Icon in VAST3 spec

child of [Icon](#Icon_76) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="IconClicks_80" name="IconClicks_80"></a>
## Class IconClicks _extends_ VastElement

child of [Icon](#Icon_76) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "IconClickThrough" child to current "IconClicks". Return "IconClicks" to stay on same current level.
addIconClickThrough(content: string): IconClicks
```

↘ _go to [IconClicks](#IconClicks_80)_ _(current class)_

```js
// Attach a "IconClickThrough" child to current "IconClicks". Return "IconClickThrough" to move on child level.
attachIconClickThrough(content: string): IconClickThrough
```

↘ _go to [IconClickThrough](#IconClickThrough_81)_ _(last level element)_

```js
// Add a "IconClickTracking" child to current "IconClicks". Return "IconClicks" to stay on same current level.
addIconClickTracking(content: string): IconClicks
```

↘ _go to [IconClicks](#IconClicks_80)_ _(current class)_

```js
// Attach a "IconClickTracking" child to current "IconClicks". Return "IconClickTracking" to move on child level.
attachIconClickTracking(content: string): IconClickTracking
```

↘ _go to [IconClickTracking](#IconClickTracking_82)_ _(last level element)_

<a id="IconClickThrough_81" name="IconClickThrough_81"></a>
## Class IconClickThrough _extends_ VastElement

child of [IconClicks](#IconClicks_80) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="IconClickTracking_82" name="IconClickTracking_82"></a>
## Class IconClickTracking _extends_ VastElement

child of [IconClicks](#IconClicks_80) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="IconViewTracking_83" name="IconViewTracking_83"></a>
## Class IconViewTracking _extends_ VastElement

child of [Icon](#Icon_76) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="CompanionAds_84" name="CompanionAds_84"></a>
## Class CompanionAds _extends_ VastElement

An uniq one of this child or others at same level are required below Creative in VAST3 spec

child of [Creative](#Creative_68) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Attach a "Companion" child to current "CompanionAds". Return "Companion" to move on child level.
attachCompanion(attributes: {
  id: string /* required */, 
  width: string /* required */, 
  height: string /* required */, 
  assetWidth: string /* required */, 
  assetHeight: string /* required */, 
  expandedWidth: string /* required */, 
  expandedHeight: string /* required */, 
  apiFramework: string /* required */, 
  adSlotID: string /* required */
}): Companion
```

↘ _go to [Companion](#Companion_85)_

<a id="Companion_85" name="Companion_85"></a>
## Class Companion _extends_ VastElement

child of [CompanionAds](#CompanionAds_84) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "StaticResource" child to current "Companion". Return "Companion" to stay on same current level.
addStaticResource(content: string, attributes: {
  creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash") /* required */
}): Companion
```

↘ _go to [Companion](#Companion_85)_ _(current class)_

```js
// Attach a "StaticResource" child to current "Companion". Return "StaticResource" to move on child level.
attachStaticResource(content: string, attributes: {
  creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash") /* required */
}): StaticResource
```

↘ _go to [StaticResource](#StaticResource_86)_ _(last level element)_

```js
// Add a "IFrameResource" child to current "Companion". Return "Companion" to stay on same current level.
addIFrameResource(content: string): Companion
```

↘ _go to [Companion](#Companion_85)_ _(current class)_

```js
// Attach a "IFrameResource" child to current "Companion". Return "IFrameResource" to move on child level.
attachIFrameResource(content: string): IFrameResource
```

↘ _go to [IFrameResource](#IFrameResource_87)_ _(last level element)_

```js
// Add a "HTMLResource" child to current "Companion". Return "Companion" to stay on same current level.
addHTMLResource(content: string): Companion
```

↘ _go to [Companion](#Companion_85)_ _(current class)_

```js
// Attach a "HTMLResource" child to current "Companion". Return "HTMLResource" to move on child level.
attachHTMLResource(content: string): HTMLResource
```

↘ _go to [HTMLResource](#HTMLResource_88)_ _(last level element)_

```js
// Add a "AdParameters" child to current "Companion". Return "Companion" to stay on same current level.
addAdParameters(content: string, attributes: {
  xmlEncoded: string /* required */
}): Companion
```

↘ _go to [Companion](#Companion_85)_ _(current class)_

```js
// Attach a "AdParameters" child to current "Companion". Return "AdParameters" to move on child level.
attachAdParameters(content: string, attributes: {
  xmlEncoded: string /* required */
}): AdParameters
```

↘ _go to [AdParameters](#AdParameters_89)_ _(last level element)_

```js
// Add a "AltText" child to current "Companion". Return "Companion" to stay on same current level.
addAltText(content: string): Companion
```

↘ _go to [Companion](#Companion_85)_ _(current class)_

```js
// Attach a "AltText" child to current "Companion". Return "AltText" to move on child level.
attachAltText(content: string): AltText
```

↘ _go to [AltText](#AltText_90)_ _(last level element)_

```js
// Add a "CompanionClickThrough" child to current "Companion". Return "Companion" to stay on same current level.
addCompanionClickThrough(content: string): Companion
```

↘ _go to [Companion](#Companion_85)_ _(current class)_

```js
// Attach a "CompanionClickThrough" child to current "Companion". Return "CompanionClickThrough" to move on child level.
attachCompanionClickThrough(content: string): CompanionClickThrough
```

↘ _go to [CompanionClickThrough](#CompanionClickThrough_91)_ _(last level element)_

```js
// Add a "CompanionClickTracking" child to current "Companion". Return "Companion" to stay on same current level.
addCompanionClickTracking(content: string): Companion
```

↘ _go to [Companion](#Companion_85)_ _(current class)_

```js
// Attach a "CompanionClickTracking" child to current "Companion". Return "CompanionClickTracking" to move on child level.
attachCompanionClickTracking(content: string): CompanionClickTracking
```

↘ _go to [CompanionClickTracking](#CompanionClickTracking_92)_ _(last level element)_

```js
// Attach a "TrackingEvents" child to current "Companion". Return "TrackingEvents" to move on child level.
attachTrackingEvents(): TrackingEvents
```

↘ _go to [TrackingEvents](#TrackingEvents_93)_

<a id="StaticResource_86" name="StaticResource_86"></a>
## Class StaticResource _extends_ VastElement

At last one of this child and/or others are required below Companion in VAST3 spec

child of [Companion](#Companion_85) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="IFrameResource_87" name="IFrameResource_87"></a>
## Class IFrameResource _extends_ VastElement

At last one of this child and/or others are required below Companion in VAST3 spec

child of [Companion](#Companion_85) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="HTMLResource_88" name="HTMLResource_88"></a>
## Class HTMLResource _extends_ VastElement

At last one of this child and/or others are required below Companion in VAST3 spec

child of [Companion](#Companion_85) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="AdParameters_89" name="AdParameters_89"></a>
## Class AdParameters _extends_ VastElement

child of [Companion](#Companion_85) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="AltText_90" name="AltText_90"></a>
## Class AltText _extends_ VastElement

child of [Companion](#Companion_85) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="CompanionClickThrough_91" name="CompanionClickThrough_91"></a>
## Class CompanionClickThrough _extends_ VastElement

child of [Companion](#Companion_85) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="CompanionClickTracking_92" name="CompanionClickTracking_92"></a>
## Class CompanionClickTracking _extends_ VastElement

child of [Companion](#Companion_85) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="TrackingEvents_93" name="TrackingEvents_93"></a>
## Class TrackingEvents _extends_ VastElement

child of [Companion](#Companion_85) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "Tracking" child to current "TrackingEvents". Return "TrackingEvents" to stay on same current level.
addTracking(content: string, attributes: {
  event:("creativeView") /* required */
}): TrackingEvents
```

↘ _go to [TrackingEvents](#TrackingEvents_93)_ _(current class)_

```js
// Attach a "Tracking" child to current "TrackingEvents". Return "Tracking" to move on child level.
attachTracking(content: string, attributes: {
  event:("creativeView") /* required */
}): Tracking
```

↘ _go to [Tracking](#Tracking_94)_ _(last level element)_

<a id="Tracking_94" name="Tracking_94"></a>
## Class Tracking _extends_ VastElement

child of [TrackingEvents](#TrackingEvents_93) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="NonLinearAds_95" name="NonLinearAds_95"></a>
## Class NonLinearAds _extends_ VastElement

An uniq one of this child or others at same level are required below Creative in VAST3 spec

child of [Creative](#Creative_68) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Attach a "NonLinear" child to current "NonLinearAds". Return "NonLinear" to move on child level.
attachNonLinear(attributes: {
  id: string /* required */, 
  width: string /* required */, 
  height: string /* required */, 
  expandedWidth: string /* required */, 
  expandedHeight: string /* required */, 
  scalable: string /* required */, 
  maintainAspectRatio: string /* required */, 
  minSuggestedDuration: string /* required */, 
  apiFramework: string /* required */
}): NonLinear
```

↘ _go to [NonLinear](#NonLinear_96)_

```js
// Attach a "TrackingEvents" child to current "NonLinearAds". Return "TrackingEvents" to move on child level.
attachTrackingEvents(): TrackingEvents
```

↘ _go to [TrackingEvents](#TrackingEvents_98)_

<a id="NonLinear_96" name="NonLinear_96"></a>
## Class NonLinear _extends_ VastElement

child of [NonLinearAds](#NonLinearAds_95) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "NonLinearClickTracking" child to current "NonLinear". Return "NonLinear" to stay on same current level.
addNonLinearClickTracking(content: string): NonLinear
```

↘ _go to [NonLinear](#NonLinear_96)_ _(current class)_

```js
// Attach a "NonLinearClickTracking" child to current "NonLinear". Return "NonLinearClickTracking" to move on child level.
attachNonLinearClickTracking(content: string): NonLinearClickTracking
```

↘ _go to [NonLinearClickTracking](#NonLinearClickTracking_97)_ _(last level element)_

<a id="NonLinearClickTracking_97" name="NonLinearClickTracking_97"></a>
## Class NonLinearClickTracking _extends_ VastElement

child of [NonLinear](#NonLinear_96) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="TrackingEvents_98" name="TrackingEvents_98"></a>
## Class TrackingEvents _extends_ VastElement

child of [NonLinearAds](#NonLinearAds_95) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "Tracking" child to current "TrackingEvents". Return "TrackingEvents" to stay on same current level.
addTracking(content: string, attributes: {
  event:("creativeView"|"start"|"firstQuartile"|"midpoint"|"thirdQuartile"|"complete"|"mute"|"unmute"|"pause"|"rewind"|"resume"|"fullscreen"|"exitFullscreen"|"expand"|"collapse"|"acceptInvitation"|"close"|"progress") /* required */
}): TrackingEvents
```

↘ _go to [TrackingEvents](#TrackingEvents_98)_ _(current class)_

```js
// Attach a "Tracking" child to current "TrackingEvents". Return "Tracking" to move on child level.
attachTracking(content: string, attributes: {
  event:("creativeView"|"start"|"firstQuartile"|"midpoint"|"thirdQuartile"|"complete"|"mute"|"unmute"|"pause"|"rewind"|"resume"|"fullscreen"|"exitFullscreen"|"expand"|"collapse"|"acceptInvitation"|"close"|"progress") /* required */
}): Tracking
```

↘ _go to [Tracking](#Tracking_99)_ _(last level element)_

<a id="Tracking_99" name="Tracking_99"></a>
## Class Tracking _extends_ VastElement

child of [TrackingEvents](#TrackingEvents_98) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Extensions_100" name="Extensions_100"></a>
## Class Extensions _extends_ VastElement

child of [Wrapper](#Wrapper_62) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "Extension" child to current "Extensions". Return "Extensions" to stay on same current level.
addExtension(content: string, attributes: {
  type: string /* required */
}): Extensions
```

↘ _go to [Extensions](#Extensions_100)_ _(current class)_

```js
// Attach a "Extension" child to current "Extensions". Return "Extension" to move on child level.
attachExtension(content: string, attributes: {
  type: string /* required */
}): Extension
```

↘ _go to [Extension](#Extension_101)_ _(last level element)_

<a id="Extension_101" name="Extension_101"></a>
## Class Extension _extends_ VastElement

This child is required below Extensions in VAST3 spec

child of [Extensions](#Extensions_100) ↗

_no specific methods see [VastElement](#VastElement)_