# VAST4 API Documentation
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

<a id="apiv4" name="apiv4"></a>
## Class apiv4 _extends_ VastElement

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Attach a "VAST" child to current "apiv4". Return "VAST" to move on child level.
attachVAST(attributes: {
  version:("4.0") /* required */
}): VAST
```

↘ _go to [VAST](#VAST_4)_

<a id="VAST_4" name="VAST_4"></a>
## Class VAST _extends_ VastElement

This child once is the only one allowed at this level below apiv4 in VAST4 spec

child of [apiv4](#apiv4) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "Error" child to current "VAST". Return "VAST" to stay on same current level.
addError(content: string): VAST
```

↘ _go to [VAST](#VAST_4)_ _(current class)_

```js
// Attach a "Error" child to current "VAST". Return "Error" to move on child level.
attachError(content: string): Error
```

↘ _go to [Error](#Error_5)_ _(last level element)_

```js
// Attach a "Ad" child to current "VAST". Return "Ad" to move on child level.
attachAd(attributes: {
  id: string /* required */, 
  sequence: string /* required */, 
  conditionalAd: string /* required */
}): Ad
```

↘ _go to [Ad](#Ad_6)_

<a id="Error_5" name="Error_5"></a>
## Class Error _extends_ VastElement

child of [VAST](#VAST_4) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Ad_6" name="Ad_6"></a>
## Class Ad _extends_ VastElement

At last one of this child and/or others are required below VAST in VAST4 spec

child of [VAST](#VAST_4) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Attach a "InLine" child to current "Ad". Return "InLine" to move on child level.
attachInLine(): InLine
```

↘ _go to [InLine](#InLine_7)_

```js
// Attach a "Wrapper" child to current "Ad". Return "Wrapper" to move on child level.
attachWrapper(attributes: {
  followAdditonalWrappers: string /* required */, 
  allowMultipleAds: string /* required */, 
  fallbackOnNoAd: string /* required */
}): Wrapper
```

↘ _go to [Wrapper](#Wrapper_72)_

<a id="InLine_7" name="InLine_7"></a>
## Class InLine _extends_ VastElement

An uniq one of this child or others at same level are required below Ad in VAST4 spec

child of [Ad](#Ad_6) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "AdSystem" child to current "InLine". Return "InLine" to stay on same current level.
addAdSystem(content: string, attributes: {
  version: string /* required */
}): InLine
```

↘ _go to [InLine](#InLine_7)_ _(current class)_

```js
// Attach a "AdSystem" child to current "InLine". Return "AdSystem" to move on child level.
attachAdSystem(content: string, attributes: {
  version: string /* required */
}): AdSystem
```

↘ _go to [AdSystem](#AdSystem_8)_ _(last level element)_

```js
// Add a "AdTitle" child to current "InLine". Return "InLine" to stay on same current level.
addAdTitle(content: string): InLine
```

↘ _go to [InLine](#InLine_7)_ _(current class)_

```js
// Attach a "AdTitle" child to current "InLine". Return "AdTitle" to move on child level.
attachAdTitle(content: string): AdTitle
```

↘ _go to [AdTitle](#AdTitle_9)_ _(last level element)_

```js
// Add a "Impression" child to current "InLine". Return "InLine" to stay on same current level.
addImpression(content: string, attributes: {
  id: string /* required */
}): InLine
```

↘ _go to [InLine](#InLine_7)_ _(current class)_

```js
// Attach a "Impression" child to current "InLine". Return "Impression" to move on child level.
attachImpression(content: string, attributes: {
  id: string /* required */
}): Impression
```

↘ _go to [Impression](#Impression_10)_ _(last level element)_

```js
// Add a "Category" child to current "InLine". Return "InLine" to stay on same current level.
addCategory(content: string, attributes: {
  authority: string /* required */
}): InLine
```

↘ _go to [InLine](#InLine_7)_ _(current class)_

```js
// Attach a "Category" child to current "InLine". Return "Category" to move on child level.
attachCategory(content: string, attributes: {
  authority: string /* required */
}): Category
```

↘ _go to [Category](#Category_11)_ _(last level element)_

```js
// Add a "Description" child to current "InLine". Return "InLine" to stay on same current level.
addDescription(content: string): InLine
```

↘ _go to [InLine](#InLine_7)_ _(current class)_

```js
// Attach a "Description" child to current "InLine". Return "Description" to move on child level.
attachDescription(content: string): Description
```

↘ _go to [Description](#Description_12)_ _(last level element)_

```js
// Add a "Advertiser" child to current "InLine". Return "InLine" to stay on same current level.
addAdvertiser(content: string): InLine
```

↘ _go to [InLine](#InLine_7)_ _(current class)_

```js
// Attach a "Advertiser" child to current "InLine". Return "Advertiser" to move on child level.
attachAdvertiser(content: string): Advertiser
```

↘ _go to [Advertiser](#Advertiser_13)_ _(last level element)_

```js
// Add a "Pricing" child to current "InLine". Return "InLine" to stay on same current level.
addPricing(content: string, attributes: {
  currency: string /* required */, 
  model:("CPM"|"CPC"|"CPE"|"CPV") /* required */
}): InLine
```

↘ _go to [InLine](#InLine_7)_ _(current class)_

```js
// Attach a "Pricing" child to current "InLine". Return "Pricing" to move on child level.
attachPricing(content: string, attributes: {
  currency: string /* required */, 
  model:("CPM"|"CPC"|"CPE"|"CPV") /* required */
}): Pricing
```

↘ _go to [Pricing](#Pricing_14)_ _(last level element)_

```js
// Add a "Survey" child to current "InLine". Return "InLine" to stay on same current level.
addSurvey(content: string, attributes: {
  type: string /* required */
}): InLine
```

↘ _go to [InLine](#InLine_7)_ _(current class)_

```js
// Attach a "Survey" child to current "InLine". Return "Survey" to move on child level.
attachSurvey(content: string, attributes: {
  type: string /* required */
}): Survey
```

↘ _go to [Survey](#Survey_15)_ _(last level element)_

```js
// Add a "Error" child to current "InLine". Return "InLine" to stay on same current level.
addError(content: string): InLine
```

↘ _go to [InLine](#InLine_7)_ _(current class)_

```js
// Attach a "Error" child to current "InLine". Return "Error" to move on child level.
attachError(content: string): Error
```

↘ _go to [Error](#Error_16)_ _(last level element)_

```js
// Attach a "ViewableImpression" child to current "InLine". Return "ViewableImpression" to move on child level.
attachViewableImpression(attributes: {
  id: string /* required */
}): ViewableImpression
```

↘ _go to [ViewableImpression](#ViewableImpression_17)_

```js
// Attach a "AdVerifications" child to current "InLine". Return "AdVerifications" to move on child level.
attachAdVerifications(): AdVerifications
```

↘ _go to [AdVerifications](#AdVerifications_21)_

```js
// Attach a "Extensions" child to current "InLine". Return "Extensions" to move on child level.
attachExtensions(): Extensions
```

↘ _go to [Extensions](#Extensions_26)_

```js
// Attach a "Creatives" child to current "InLine". Return "Creatives" to move on child level.
attachCreatives(): Creatives
```

↘ _go to [Creatives](#Creatives_28)_

<a id="AdSystem_8" name="AdSystem_8"></a>
## Class AdSystem _extends_ VastElement

This child is required below InLine in VAST4 spec

child of [InLine](#InLine_7) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="AdTitle_9" name="AdTitle_9"></a>
## Class AdTitle _extends_ VastElement

This child is required below InLine in VAST4 spec

child of [InLine](#InLine_7) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Impression_10" name="Impression_10"></a>
## Class Impression _extends_ VastElement

At last one of this child and/or others are required below InLine in VAST4 spec

child of [InLine](#InLine_7) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Category_11" name="Category_11"></a>
## Class Category _extends_ VastElement

child of [InLine](#InLine_7) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Description_12" name="Description_12"></a>
## Class Description _extends_ VastElement

child of [InLine](#InLine_7) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Advertiser_13" name="Advertiser_13"></a>
## Class Advertiser _extends_ VastElement

child of [InLine](#InLine_7) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Pricing_14" name="Pricing_14"></a>
## Class Pricing _extends_ VastElement

child of [InLine](#InLine_7) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Survey_15" name="Survey_15"></a>
## Class Survey _extends_ VastElement

child of [InLine](#InLine_7) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Error_16" name="Error_16"></a>
## Class Error _extends_ VastElement

child of [InLine](#InLine_7) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="ViewableImpression_17" name="ViewableImpression_17"></a>
## Class ViewableImpression _extends_ VastElement

child of [InLine](#InLine_7) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "Viewable" child to current "ViewableImpression". Return "ViewableImpression" to stay on same current level.
addViewable(content: string): ViewableImpression
```

↘ _go to [ViewableImpression](#ViewableImpression_17)_ _(current class)_

```js
// Attach a "Viewable" child to current "ViewableImpression". Return "Viewable" to move on child level.
attachViewable(content: string): Viewable
```

↘ _go to [Viewable](#Viewable_18)_ _(last level element)_

```js
// Add a "NotViewable" child to current "ViewableImpression". Return "ViewableImpression" to stay on same current level.
addNotViewable(content: string): ViewableImpression
```

↘ _go to [ViewableImpression](#ViewableImpression_17)_ _(current class)_

```js
// Attach a "NotViewable" child to current "ViewableImpression". Return "NotViewable" to move on child level.
attachNotViewable(content: string): NotViewable
```

↘ _go to [NotViewable](#NotViewable_19)_ _(last level element)_

```js
// Add a "ViewUndetermined" child to current "ViewableImpression". Return "ViewableImpression" to stay on same current level.
addViewUndetermined(content: string): ViewableImpression
```

↘ _go to [ViewableImpression](#ViewableImpression_17)_ _(current class)_

```js
// Attach a "ViewUndetermined" child to current "ViewableImpression". Return "ViewUndetermined" to move on child level.
attachViewUndetermined(content: string): ViewUndetermined
```

↘ _go to [ViewUndetermined](#ViewUndetermined_20)_ _(last level element)_

<a id="Viewable_18" name="Viewable_18"></a>
## Class Viewable _extends_ VastElement

child of [ViewableImpression](#ViewableImpression_17) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="NotViewable_19" name="NotViewable_19"></a>
## Class NotViewable _extends_ VastElement

child of [ViewableImpression](#ViewableImpression_17) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="ViewUndetermined_20" name="ViewUndetermined_20"></a>
## Class ViewUndetermined _extends_ VastElement

child of [ViewableImpression](#ViewableImpression_17) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="AdVerifications_21" name="AdVerifications_21"></a>
## Class AdVerifications _extends_ VastElement

child of [InLine](#InLine_7) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Attach a "Verification" child to current "AdVerifications". Return "Verification" to move on child level.
attachVerification(attributes: {
  vendor: string /* required */
}): Verification
```

↘ _go to [Verification](#Verification_22)_

<a id="Verification_22" name="Verification_22"></a>
## Class Verification _extends_ VastElement

child of [AdVerifications](#AdVerifications_21) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "JavaScriptResource" child to current "Verification". Return "Verification" to stay on same current level.
addJavaScriptResource(content: string, attributes: {
  apiFramework: string /* required */
}): Verification
```

↘ _go to [Verification](#Verification_22)_ _(current class)_

```js
// Attach a "JavaScriptResource" child to current "Verification". Return "JavaScriptResource" to move on child level.
attachJavaScriptResource(content: string, attributes: {
  apiFramework: string /* required */
}): JavaScriptResource
```

↘ _go to [JavaScriptResource](#JavaScriptResource_23)_ _(last level element)_

```js
// Add a "FlashResource" child to current "Verification". Return "Verification" to stay on same current level.
addFlashResource(content: string, attributes: {
  apiFramework: string /* required */
}): Verification
```

↘ _go to [Verification](#Verification_22)_ _(current class)_

```js
// Attach a "FlashResource" child to current "Verification". Return "FlashResource" to move on child level.
attachFlashResource(content: string, attributes: {
  apiFramework: string /* required */
}): FlashResource
```

↘ _go to [FlashResource](#FlashResource_24)_ _(last level element)_

```js
// Add a "ViewableImpression" child to current "Verification". Return "Verification" to stay on same current level.
addViewableImpression(content: string, attributes: {
  id: string /* required */
}): Verification
```

↘ _go to [Verification](#Verification_22)_ _(current class)_

```js
// Attach a "ViewableImpression" child to current "Verification". Return "ViewableImpression" to move on child level.
attachViewableImpression(content: string, attributes: {
  id: string /* required */
}): ViewableImpression
```

↘ _go to [ViewableImpression](#ViewableImpression_25)_ _(last level element)_

<a id="JavaScriptResource_23" name="JavaScriptResource_23"></a>
## Class JavaScriptResource _extends_ VastElement

child of [Verification](#Verification_22) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="FlashResource_24" name="FlashResource_24"></a>
## Class FlashResource _extends_ VastElement

child of [Verification](#Verification_22) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="ViewableImpression_25" name="ViewableImpression_25"></a>
## Class ViewableImpression _extends_ VastElement

child of [Verification](#Verification_22) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Extensions_26" name="Extensions_26"></a>
## Class Extensions _extends_ VastElement

child of [InLine](#InLine_7) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "Extension" child to current "Extensions". Return "Extensions" to stay on same current level.
addExtension(content: string, attributes: {
  type: string /* required */
}): Extensions
```

↘ _go to [Extensions](#Extensions_26)_ _(current class)_

```js
// Attach a "Extension" child to current "Extensions". Return "Extension" to move on child level.
attachExtension(content: string, attributes: {
  type: string /* required */
}): Extension
```

↘ _go to [Extension](#Extension_27)_ _(last level element)_

<a id="Extension_27" name="Extension_27"></a>
## Class Extension _extends_ VastElement

This child is required below Extensions in VAST4 spec

child of [Extensions](#Extensions_26) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Creatives_28" name="Creatives_28"></a>
## Class Creatives _extends_ VastElement

This child is required below InLine in VAST4 spec

child of [InLine](#InLine_7) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Attach a "Creative" child to current "Creatives". Return "Creative" to move on child level.
attachCreative(attributes: {
  id: string /* required */, 
  sequence: string /* required */, 
  adId: string /* required */, 
  apiFramework: string /* required */
}): Creative
```

↘ _go to [Creative](#Creative_29)_

<a id="Creative_29" name="Creative_29"></a>
## Class Creative _extends_ VastElement

At last one of this child and/or others are required below Creatives in VAST4 spec

child of [Creatives](#Creatives_28) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "UniversalAdId" child to current "Creative". Return "Creative" to stay on same current level.
addUniversalAdId(content: string, attributes: {
  idRegistry: string /* required */, 
  idValue: string /* required */
}): Creative
```

↘ _go to [Creative](#Creative_29)_ _(current class)_

```js
// Attach a "UniversalAdId" child to current "Creative". Return "UniversalAdId" to move on child level.
attachUniversalAdId(content: string, attributes: {
  idRegistry: string /* required */, 
  idValue: string /* required */
}): UniversalAdId
```

↘ _go to [UniversalAdId](#UniversalAdId_30)_ _(last level element)_

```js
// Attach a "CreativeExtensions" child to current "Creative". Return "CreativeExtensions" to move on child level.
attachCreativeExtensions(): CreativeExtensions
```

↘ _go to [CreativeExtensions](#CreativeExtensions_31)_

```js
// Attach a "Linear" child to current "Creative". Return "Linear" to move on child level.
attachLinear(attributes: {
  skipoffset: string /* required */
}): Linear
```

↘ _go to [Linear](#Linear_33)_

```js
// Attach a "NonLinearAds" child to current "Creative". Return "NonLinearAds" to move on child level.
attachNonLinearAds(): NonLinearAds
```

↘ _go to [NonLinearAds](#NonLinearAds_55)_

```js
// Attach a "CompanionAds" child to current "Creative". Return "CompanionAds" to move on child level.
attachCompanionAds(attributes: {
  required:("all"|"any"|"none") /* required */
}): CompanionAds
```

↘ _go to [CompanionAds](#CompanionAds_61)_

<a id="UniversalAdId_30" name="UniversalAdId_30"></a>
## Class UniversalAdId _extends_ VastElement

This child is required below Creative in VAST4 spec

child of [Creative](#Creative_29) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="CreativeExtensions_31" name="CreativeExtensions_31"></a>
## Class CreativeExtensions _extends_ VastElement

child of [Creative](#Creative_29) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "CreativeExtension" child to current "CreativeExtensions". Return "CreativeExtensions" to stay on same current level.
addCreativeExtension(content: string, attributes: {
  type: string /* required */
}): CreativeExtensions
```

↘ _go to [CreativeExtensions](#CreativeExtensions_31)_ _(current class)_

```js
// Attach a "CreativeExtension" child to current "CreativeExtensions". Return "CreativeExtension" to move on child level.
attachCreativeExtension(content: string, attributes: {
  type: string /* required */
}): CreativeExtension
```

↘ _go to [CreativeExtension](#CreativeExtension_32)_ _(last level element)_

<a id="CreativeExtension_32" name="CreativeExtension_32"></a>
## Class CreativeExtension _extends_ VastElement

child of [CreativeExtensions](#CreativeExtensions_31) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Linear_33" name="Linear_33"></a>
## Class Linear _extends_ VastElement

An uniq one of this child or others at same level are required below Creative in VAST4 spec

child of [Creative](#Creative_29) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "Duration" child to current "Linear". Return "Linear" to stay on same current level.
addDuration(content: string): Linear
```

↘ _go to [Linear](#Linear_33)_ _(current class)_

```js
// Attach a "Duration" child to current "Linear". Return "Duration" to move on child level.
attachDuration(content: string): Duration
```

↘ _go to [Duration](#Duration_34)_ _(last level element)_

```js
// Add a "AdParameters" child to current "Linear". Return "Linear" to stay on same current level.
addAdParameters(content: string, attributes: {
  xmlEncoded: string /* required */
}): Linear
```

↘ _go to [Linear](#Linear_33)_ _(current class)_

```js
// Attach a "AdParameters" child to current "Linear". Return "AdParameters" to move on child level.
attachAdParameters(content: string, attributes: {
  xmlEncoded: string /* required */
}): AdParameters
```

↘ _go to [AdParameters](#AdParameters_35)_ _(last level element)_

```js
// Attach a "MediaFiles" child to current "Linear". Return "MediaFiles" to move on child level.
attachMediaFiles(): MediaFiles
```

↘ _go to [MediaFiles](#MediaFiles_36)_

```js
// Attach a "VideoClicks" child to current "Linear". Return "VideoClicks" to move on child level.
attachVideoClicks(): VideoClicks
```

↘ _go to [VideoClicks](#VideoClicks_40)_

```js
// Attach a "TrackingEvents" child to current "Linear". Return "TrackingEvents" to move on child level.
attachTrackingEvents(): TrackingEvents
```

↘ _go to [TrackingEvents](#TrackingEvents_44)_

```js
// Attach a "Icons" child to current "Linear". Return "Icons" to move on child level.
attachIcons(): Icons
```

↘ _go to [Icons](#Icons_46)_

<a id="Duration_34" name="Duration_34"></a>
## Class Duration _extends_ VastElement

This child is required below Linear in VAST4 spec

child of [Linear](#Linear_33) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="AdParameters_35" name="AdParameters_35"></a>
## Class AdParameters _extends_ VastElement

child of [Linear](#Linear_33) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="MediaFiles_36" name="MediaFiles_36"></a>
## Class MediaFiles _extends_ VastElement

This child is required below Linear in VAST4 spec

child of [Linear](#Linear_33) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "Mezzanine" child to current "MediaFiles". Return "MediaFiles" to stay on same current level.
addMezzanine(content: string): MediaFiles
```

↘ _go to [MediaFiles](#MediaFiles_36)_ _(current class)_

```js
// Attach a "Mezzanine" child to current "MediaFiles". Return "Mezzanine" to move on child level.
attachMezzanine(content: string): Mezzanine
```

↘ _go to [Mezzanine](#Mezzanine_37)_ _(last level element)_

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

↘ _go to [MediaFiles](#MediaFiles_36)_ _(current class)_

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

↘ _go to [MediaFile](#MediaFile_38)_ _(last level element)_

```js
// Add a "InteractiveCreativeFile" child to current "MediaFiles". Return "MediaFiles" to stay on same current level.
addInteractiveCreativeFile(content: string): MediaFiles
```

↘ _go to [MediaFiles](#MediaFiles_36)_ _(current class)_

```js
// Attach a "InteractiveCreativeFile" child to current "MediaFiles". Return "InteractiveCreativeFile" to move on child level.
attachInteractiveCreativeFile(content: string): InteractiveCreativeFile
```

↘ _go to [InteractiveCreativeFile](#InteractiveCreativeFile_39)_ _(last level element)_

<a id="Mezzanine_37" name="Mezzanine_37"></a>
## Class Mezzanine _extends_ VastElement

child of [MediaFiles](#MediaFiles_36) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="MediaFile_38" name="MediaFile_38"></a>
## Class MediaFile _extends_ VastElement

At last one of this child and/or others are required below MediaFiles in VAST4 spec

child of [MediaFiles](#MediaFiles_36) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="InteractiveCreativeFile_39" name="InteractiveCreativeFile_39"></a>
## Class InteractiveCreativeFile _extends_ VastElement

child of [MediaFiles](#MediaFiles_36) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="VideoClicks_40" name="VideoClicks_40"></a>
## Class VideoClicks _extends_ VastElement

child of [Linear](#Linear_33) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "ClickThrough" child to current "VideoClicks". Return "VideoClicks" to stay on same current level.
addClickThrough(content: string, attributes: {
  id: string /* required */
}): VideoClicks
```

↘ _go to [VideoClicks](#VideoClicks_40)_ _(current class)_

```js
// Attach a "ClickThrough" child to current "VideoClicks". Return "ClickThrough" to move on child level.
attachClickThrough(content: string, attributes: {
  id: string /* required */
}): ClickThrough
```

↘ _go to [ClickThrough](#ClickThrough_41)_ _(last level element)_

```js
// Add a "ClickTracking" child to current "VideoClicks". Return "VideoClicks" to stay on same current level.
addClickTracking(content: string, attributes: {
  id: string /* required */
}): VideoClicks
```

↘ _go to [VideoClicks](#VideoClicks_40)_ _(current class)_

```js
// Attach a "ClickTracking" child to current "VideoClicks". Return "ClickTracking" to move on child level.
attachClickTracking(content: string, attributes: {
  id: string /* required */
}): ClickTracking
```

↘ _go to [ClickTracking](#ClickTracking_42)_ _(last level element)_

```js
// Add a "CustomClick" child to current "VideoClicks". Return "VideoClicks" to stay on same current level.
addCustomClick(content: string, attributes: {
  id: string /* required */
}): VideoClicks
```

↘ _go to [VideoClicks](#VideoClicks_40)_ _(current class)_

```js
// Attach a "CustomClick" child to current "VideoClicks". Return "CustomClick" to move on child level.
attachCustomClick(content: string, attributes: {
  id: string /* required */
}): CustomClick
```

↘ _go to [CustomClick](#CustomClick_43)_ _(last level element)_

<a id="ClickThrough_41" name="ClickThrough_41"></a>
## Class ClickThrough _extends_ VastElement

child of [VideoClicks](#VideoClicks_40) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="ClickTracking_42" name="ClickTracking_42"></a>
## Class ClickTracking _extends_ VastElement

child of [VideoClicks](#VideoClicks_40) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="CustomClick_43" name="CustomClick_43"></a>
## Class CustomClick _extends_ VastElement

child of [VideoClicks](#VideoClicks_40) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="TrackingEvents_44" name="TrackingEvents_44"></a>
## Class TrackingEvents _extends_ VastElement

child of [Linear](#Linear_33) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "Tracking" child to current "TrackingEvents". Return "TrackingEvents" to stay on same current level.
addTracking(content: string, attributes: {
  offset: string /* required */, 
  event:("mute"|"unmute"|"pause"|"resume"|"rewind"|"skip"|"playerExpand"|"playerCollapse"|"otherAdInteraction"|"start"|"firstQuartile"|"midpoint"|"thirdQuartile"|"complete"|"acceptInvitationLinear"|"timeSpentViewing"|"progress") /* required */
}): TrackingEvents
```

↘ _go to [TrackingEvents](#TrackingEvents_44)_ _(current class)_

```js
// Attach a "Tracking" child to current "TrackingEvents". Return "Tracking" to move on child level.
attachTracking(content: string, attributes: {
  offset: string /* required */, 
  event:("mute"|"unmute"|"pause"|"resume"|"rewind"|"skip"|"playerExpand"|"playerCollapse"|"otherAdInteraction"|"start"|"firstQuartile"|"midpoint"|"thirdQuartile"|"complete"|"acceptInvitationLinear"|"timeSpentViewing"|"progress") /* required */
}): Tracking
```

↘ _go to [Tracking](#Tracking_45)_ _(last level element)_

<a id="Tracking_45" name="Tracking_45"></a>
## Class Tracking _extends_ VastElement

child of [TrackingEvents](#TrackingEvents_44) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Icons_46" name="Icons_46"></a>
## Class Icons _extends_ VastElement

child of [Linear](#Linear_33) ↗

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
  apiFramework: string /* required */, 
  pxratio: string /* required */
}): Icon
```

↘ _go to [Icon](#Icon_47)_

<a id="Icon_47" name="Icon_47"></a>
## Class Icon _extends_ VastElement

At last one of this child and/or others are required below Icons in VAST4 spec

child of [Icons](#Icons_46) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "StaticResource" child to current "Icon". Return "Icon" to stay on same current level.
addStaticResource(content: string, attributes: {
  creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash") /* required */
}): Icon
```

↘ _go to [Icon](#Icon_47)_ _(current class)_

```js
// Attach a "StaticResource" child to current "Icon". Return "StaticResource" to move on child level.
attachStaticResource(content: string, attributes: {
  creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash") /* required */
}): StaticResource
```

↘ _go to [StaticResource](#StaticResource_48)_ _(last level element)_

```js
// Add a "IFrameResource" child to current "Icon". Return "Icon" to stay on same current level.
addIFrameResource(content: string): Icon
```

↘ _go to [Icon](#Icon_47)_ _(current class)_

```js
// Attach a "IFrameResource" child to current "Icon". Return "IFrameResource" to move on child level.
attachIFrameResource(content: string): IFrameResource
```

↘ _go to [IFrameResource](#IFrameResource_49)_ _(last level element)_

```js
// Add a "HTMLResource" child to current "Icon". Return "Icon" to stay on same current level.
addHTMLResource(content: string): Icon
```

↘ _go to [Icon](#Icon_47)_ _(current class)_

```js
// Attach a "HTMLResource" child to current "Icon". Return "HTMLResource" to move on child level.
attachHTMLResource(content: string): HTMLResource
```

↘ _go to [HTMLResource](#HTMLResource_50)_ _(last level element)_

```js
// Attach a "IconClicks" child to current "Icon". Return "IconClicks" to move on child level.
attachIconClicks(): IconClicks
```

↘ _go to [IconClicks](#IconClicks_51)_

```js
// Add a "IconViewTracking" child to current "Icon". Return "Icon" to stay on same current level.
addIconViewTracking(content: string): Icon
```

↘ _go to [Icon](#Icon_47)_ _(current class)_

```js
// Attach a "IconViewTracking" child to current "Icon". Return "IconViewTracking" to move on child level.
attachIconViewTracking(content: string): IconViewTracking
```

↘ _go to [IconViewTracking](#IconViewTracking_54)_ _(last level element)_

<a id="StaticResource_48" name="StaticResource_48"></a>
## Class StaticResource _extends_ VastElement

At last one of this child and/or others are required below Icon in VAST4 spec

child of [Icon](#Icon_47) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="IFrameResource_49" name="IFrameResource_49"></a>
## Class IFrameResource _extends_ VastElement

At last one of this child and/or others are required below Icon in VAST4 spec

child of [Icon](#Icon_47) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="HTMLResource_50" name="HTMLResource_50"></a>
## Class HTMLResource _extends_ VastElement

At last one of this child and/or others are required below Icon in VAST4 spec

child of [Icon](#Icon_47) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="IconClicks_51" name="IconClicks_51"></a>
## Class IconClicks _extends_ VastElement

child of [Icon](#Icon_47) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "IconClickThrough" child to current "IconClicks". Return "IconClicks" to stay on same current level.
addIconClickThrough(content: string): IconClicks
```

↘ _go to [IconClicks](#IconClicks_51)_ _(current class)_

```js
// Attach a "IconClickThrough" child to current "IconClicks". Return "IconClickThrough" to move on child level.
attachIconClickThrough(content: string): IconClickThrough
```

↘ _go to [IconClickThrough](#IconClickThrough_52)_ _(last level element)_

```js
// Add a "IconClickTracking" child to current "IconClicks". Return "IconClicks" to stay on same current level.
addIconClickTracking(content: string, attributes: {
  id: string /* required */
}): IconClicks
```

↘ _go to [IconClicks](#IconClicks_51)_ _(current class)_

```js
// Attach a "IconClickTracking" child to current "IconClicks". Return "IconClickTracking" to move on child level.
attachIconClickTracking(content: string, attributes: {
  id: string /* required */
}): IconClickTracking
```

↘ _go to [IconClickTracking](#IconClickTracking_53)_ _(last level element)_

<a id="IconClickThrough_52" name="IconClickThrough_52"></a>
## Class IconClickThrough _extends_ VastElement

child of [IconClicks](#IconClicks_51) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="IconClickTracking_53" name="IconClickTracking_53"></a>
## Class IconClickTracking _extends_ VastElement

child of [IconClicks](#IconClicks_51) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="IconViewTracking_54" name="IconViewTracking_54"></a>
## Class IconViewTracking _extends_ VastElement

child of [Icon](#Icon_47) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="NonLinearAds_55" name="NonLinearAds_55"></a>
## Class NonLinearAds _extends_ VastElement

An uniq one of this child or others at same level are required below Creative in VAST4 spec

child of [Creative](#Creative_29) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Attach a "NonLinear" child to current "NonLinearAds". Return "NonLinear" to move on child level.
attachNonLinear(): NonLinear
```

↘ _go to [NonLinear](#NonLinear_56)_

```js
// Attach a "TrackingEvents" child to current "NonLinearAds". Return "TrackingEvents" to move on child level.
attachTrackingEvents(): TrackingEvents
```

↘ _go to [TrackingEvents](#TrackingEvents_59)_

<a id="NonLinear_56" name="NonLinear_56"></a>
## Class NonLinear _extends_ VastElement

child of [NonLinearAds](#NonLinearAds_55) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "NonLinearClickThrough" child to current "NonLinear". Return "NonLinear" to stay on same current level.
addNonLinearClickThrough(content: string): NonLinear
```

↘ _go to [NonLinear](#NonLinear_56)_ _(current class)_

```js
// Attach a "NonLinearClickThrough" child to current "NonLinear". Return "NonLinearClickThrough" to move on child level.
attachNonLinearClickThrough(content: string): NonLinearClickThrough
```

↘ _go to [NonLinearClickThrough](#NonLinearClickThrough_57)_ _(last level element)_

```js
// Add a "NonLinearClickTracking" child to current "NonLinear". Return "NonLinear" to stay on same current level.
addNonLinearClickTracking(content: string): NonLinear
```

↘ _go to [NonLinear](#NonLinear_56)_ _(current class)_

```js
// Attach a "NonLinearClickTracking" child to current "NonLinear". Return "NonLinearClickTracking" to move on child level.
attachNonLinearClickTracking(content: string): NonLinearClickTracking
```

↘ _go to [NonLinearClickTracking](#NonLinearClickTracking_58)_ _(last level element)_

<a id="NonLinearClickThrough_57" name="NonLinearClickThrough_57"></a>
## Class NonLinearClickThrough _extends_ VastElement

child of [NonLinear](#NonLinear_56) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="NonLinearClickTracking_58" name="NonLinearClickTracking_58"></a>
## Class NonLinearClickTracking _extends_ VastElement

child of [NonLinear](#NonLinear_56) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="TrackingEvents_59" name="TrackingEvents_59"></a>
## Class TrackingEvents _extends_ VastElement

child of [NonLinearAds](#NonLinearAds_55) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "Tracking" child to current "TrackingEvents". Return "TrackingEvents" to stay on same current level.
addTracking(content: string, attributes: {
  event:("mute"|"unmute"|"pause"|"resume"|"rewind"|"skip"|"playerExpand"|"playerCollapse"|"otherAdInteraction"|"creativeView"|"acceptInvitation"|"adExpand"|"adCollapse"|"minimize"|"close"|"overlayViewDuration") /* required */
}): TrackingEvents
```

↘ _go to [TrackingEvents](#TrackingEvents_59)_ _(current class)_

```js
// Attach a "Tracking" child to current "TrackingEvents". Return "Tracking" to move on child level.
attachTracking(content: string, attributes: {
  event:("mute"|"unmute"|"pause"|"resume"|"rewind"|"skip"|"playerExpand"|"playerCollapse"|"otherAdInteraction"|"creativeView"|"acceptInvitation"|"adExpand"|"adCollapse"|"minimize"|"close"|"overlayViewDuration") /* required */
}): Tracking
```

↘ _go to [Tracking](#Tracking_60)_ _(last level element)_

<a id="Tracking_60" name="Tracking_60"></a>
## Class Tracking _extends_ VastElement

child of [TrackingEvents](#TrackingEvents_59) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="CompanionAds_61" name="CompanionAds_61"></a>
## Class CompanionAds _extends_ VastElement

An uniq one of this child or others at same level are required below Creative in VAST4 spec

child of [Creative](#Creative_29) ↗

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
  adSlotID: string /* required */, 
  pxratio: string /* required */
}): Companion
```

↘ _go to [Companion](#Companion_62)_

<a id="Companion_62" name="Companion_62"></a>
## Class Companion _extends_ VastElement

child of [CompanionAds](#CompanionAds_61) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "StaticResource" child to current "Companion". Return "Companion" to stay on same current level.
addStaticResource(content: string, attributes: {
  creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash") /* required */
}): Companion
```

↘ _go to [Companion](#Companion_62)_ _(current class)_

```js
// Attach a "StaticResource" child to current "Companion". Return "StaticResource" to move on child level.
attachStaticResource(content: string, attributes: {
  creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash") /* required */
}): StaticResource
```

↘ _go to [StaticResource](#StaticResource_63)_ _(last level element)_

```js
// Add a "IFrameResource" child to current "Companion". Return "Companion" to stay on same current level.
addIFrameResource(content: string): Companion
```

↘ _go to [Companion](#Companion_62)_ _(current class)_

```js
// Attach a "IFrameResource" child to current "Companion". Return "IFrameResource" to move on child level.
attachIFrameResource(content: string): IFrameResource
```

↘ _go to [IFrameResource](#IFrameResource_64)_ _(last level element)_

```js
// Add a "HTMLResource" child to current "Companion". Return "Companion" to stay on same current level.
addHTMLResource(content: string): Companion
```

↘ _go to [Companion](#Companion_62)_ _(current class)_

```js
// Attach a "HTMLResource" child to current "Companion". Return "HTMLResource" to move on child level.
attachHTMLResource(content: string): HTMLResource
```

↘ _go to [HTMLResource](#HTMLResource_65)_ _(last level element)_

```js
// Add a "AdParameters" child to current "Companion". Return "Companion" to stay on same current level.
addAdParameters(content: string, attributes: {
  xmlEncoded: string /* required */
}): Companion
```

↘ _go to [Companion](#Companion_62)_ _(current class)_

```js
// Attach a "AdParameters" child to current "Companion". Return "AdParameters" to move on child level.
attachAdParameters(content: string, attributes: {
  xmlEncoded: string /* required */
}): AdParameters
```

↘ _go to [AdParameters](#AdParameters_66)_ _(last level element)_

```js
// Add a "AltText" child to current "Companion". Return "Companion" to stay on same current level.
addAltText(content: string): Companion
```

↘ _go to [Companion](#Companion_62)_ _(current class)_

```js
// Attach a "AltText" child to current "Companion". Return "AltText" to move on child level.
attachAltText(content: string): AltText
```

↘ _go to [AltText](#AltText_67)_ _(last level element)_

```js
// Add a "CompanionClickThrough" child to current "Companion". Return "Companion" to stay on same current level.
addCompanionClickThrough(content: string): Companion
```

↘ _go to [Companion](#Companion_62)_ _(current class)_

```js
// Attach a "CompanionClickThrough" child to current "Companion". Return "CompanionClickThrough" to move on child level.
attachCompanionClickThrough(content: string): CompanionClickThrough
```

↘ _go to [CompanionClickThrough](#CompanionClickThrough_68)_ _(last level element)_

```js
// Add a "CompanionClickTracking" child to current "Companion". Return "Companion" to stay on same current level.
addCompanionClickTracking(content: string, attributes: {
  id: string /* required */
}): Companion
```

↘ _go to [Companion](#Companion_62)_ _(current class)_

```js
// Attach a "CompanionClickTracking" child to current "Companion". Return "CompanionClickTracking" to move on child level.
attachCompanionClickTracking(content: string, attributes: {
  id: string /* required */
}): CompanionClickTracking
```

↘ _go to [CompanionClickTracking](#CompanionClickTracking_69)_ _(last level element)_

```js
// Attach a "TrackingEvents" child to current "Companion". Return "TrackingEvents" to move on child level.
attachTrackingEvents(): TrackingEvents
```

↘ _go to [TrackingEvents](#TrackingEvents_70)_

<a id="StaticResource_63" name="StaticResource_63"></a>
## Class StaticResource _extends_ VastElement

At last one of this child and/or others are required below Companion in VAST4 spec

child of [Companion](#Companion_62) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="IFrameResource_64" name="IFrameResource_64"></a>
## Class IFrameResource _extends_ VastElement

At last one of this child and/or others are required below Companion in VAST4 spec

child of [Companion](#Companion_62) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="HTMLResource_65" name="HTMLResource_65"></a>
## Class HTMLResource _extends_ VastElement

At last one of this child and/or others are required below Companion in VAST4 spec

child of [Companion](#Companion_62) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="AdParameters_66" name="AdParameters_66"></a>
## Class AdParameters _extends_ VastElement

child of [Companion](#Companion_62) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="AltText_67" name="AltText_67"></a>
## Class AltText _extends_ VastElement

child of [Companion](#Companion_62) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="CompanionClickThrough_68" name="CompanionClickThrough_68"></a>
## Class CompanionClickThrough _extends_ VastElement

child of [Companion](#Companion_62) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="CompanionClickTracking_69" name="CompanionClickTracking_69"></a>
## Class CompanionClickTracking _extends_ VastElement

child of [Companion](#Companion_62) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="TrackingEvents_70" name="TrackingEvents_70"></a>
## Class TrackingEvents _extends_ VastElement

child of [Companion](#Companion_62) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "Tracking" child to current "TrackingEvents". Return "TrackingEvents" to stay on same current level.
addTracking(content: string, attributes: {
  event:("creativeView") /* required */
}): TrackingEvents
```

↘ _go to [TrackingEvents](#TrackingEvents_70)_ _(current class)_

```js
// Attach a "Tracking" child to current "TrackingEvents". Return "Tracking" to move on child level.
attachTracking(content: string, attributes: {
  event:("creativeView") /* required */
}): Tracking
```

↘ _go to [Tracking](#Tracking_71)_ _(last level element)_

<a id="Tracking_71" name="Tracking_71"></a>
## Class Tracking _extends_ VastElement

child of [TrackingEvents](#TrackingEvents_70) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Wrapper_72" name="Wrapper_72"></a>
## Class Wrapper _extends_ VastElement

An uniq one of this child or others at same level are required below Ad in VAST4 spec

child of [Ad](#Ad_6) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "Impression" child to current "Wrapper". Return "Wrapper" to stay on same current level.
addImpression(content: string, attributes: {
  id: string /* required */
}): Wrapper
```

↘ _go to [Wrapper](#Wrapper_72)_ _(current class)_

```js
// Attach a "Impression" child to current "Wrapper". Return "Impression" to move on child level.
attachImpression(content: string, attributes: {
  id: string /* required */
}): Impression
```

↘ _go to [Impression](#Impression_73)_ _(last level element)_

```js
// Add a "VASTAdTagURI" child to current "Wrapper". Return "Wrapper" to stay on same current level.
addVASTAdTagURI(content: string): Wrapper
```

↘ _go to [Wrapper](#Wrapper_72)_ _(current class)_

```js
// Attach a "VASTAdTagURI" child to current "Wrapper". Return "VASTAdTagURI" to move on child level.
attachVASTAdTagURI(content: string): VASTAdTagURI
```

↘ _go to [VASTAdTagURI](#VASTAdTagURI_74)_ _(last level element)_

```js
// Add a "AdSystem" child to current "Wrapper". Return "Wrapper" to stay on same current level.
addAdSystem(content: string, attributes: {
  version: string /* required */
}): Wrapper
```

↘ _go to [Wrapper](#Wrapper_72)_ _(current class)_

```js
// Attach a "AdSystem" child to current "Wrapper". Return "AdSystem" to move on child level.
attachAdSystem(content: string, attributes: {
  version: string /* required */
}): AdSystem
```

↘ _go to [AdSystem](#AdSystem_75)_ _(last level element)_

```js
// Add a "Pricing" child to current "Wrapper". Return "Wrapper" to stay on same current level.
addPricing(content: string, attributes: {
  currency: string /* required */, 
  model:("CPM"|"CPC"|"CPE"|"CPV") /* required */
}): Wrapper
```

↘ _go to [Wrapper](#Wrapper_72)_ _(current class)_

```js
// Attach a "Pricing" child to current "Wrapper". Return "Pricing" to move on child level.
attachPricing(content: string, attributes: {
  currency: string /* required */, 
  model:("CPM"|"CPC"|"CPE"|"CPV") /* required */
}): Pricing
```

↘ _go to [Pricing](#Pricing_76)_ _(last level element)_

```js
// Add a "Error" child to current "Wrapper". Return "Wrapper" to stay on same current level.
addError(content: string): Wrapper
```

↘ _go to [Wrapper](#Wrapper_72)_ _(current class)_

```js
// Attach a "Error" child to current "Wrapper". Return "Error" to move on child level.
attachError(content: string): Error
```

↘ _go to [Error](#Error_77)_ _(last level element)_

```js
// Attach a "ViewableImpression" child to current "Wrapper". Return "ViewableImpression" to move on child level.
attachViewableImpression(attributes: {
  id: string /* required */
}): ViewableImpression
```

↘ _go to [ViewableImpression](#ViewableImpression_78)_

```js
// Attach a "AdVerifications" child to current "Wrapper". Return "AdVerifications" to move on child level.
attachAdVerifications(): AdVerifications
```

↘ _go to [AdVerifications](#AdVerifications_82)_

```js
// Attach a "Extensions" child to current "Wrapper". Return "Extensions" to move on child level.
attachExtensions(): Extensions
```

↘ _go to [Extensions](#Extensions_85)_

```js
// Attach a "Creatives" child to current "Wrapper". Return "Creatives" to move on child level.
attachCreatives(): Creatives
```

↘ _go to [Creatives](#Creatives_87)_

<a id="Impression_73" name="Impression_73"></a>
## Class Impression _extends_ VastElement

At last one of this child and/or others are required below Wrapper in VAST4 spec

child of [Wrapper](#Wrapper_72) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="VASTAdTagURI_74" name="VASTAdTagURI_74"></a>
## Class VASTAdTagURI _extends_ VastElement

This child is required below Wrapper in VAST4 spec

child of [Wrapper](#Wrapper_72) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="AdSystem_75" name="AdSystem_75"></a>
## Class AdSystem _extends_ VastElement

This child is required below Wrapper in VAST4 spec

child of [Wrapper](#Wrapper_72) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Pricing_76" name="Pricing_76"></a>
## Class Pricing _extends_ VastElement

child of [Wrapper](#Wrapper_72) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Error_77" name="Error_77"></a>
## Class Error _extends_ VastElement

child of [Wrapper](#Wrapper_72) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="ViewableImpression_78" name="ViewableImpression_78"></a>
## Class ViewableImpression _extends_ VastElement

child of [Wrapper](#Wrapper_72) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "Viewable" child to current "ViewableImpression". Return "ViewableImpression" to stay on same current level.
addViewable(content: string): ViewableImpression
```

↘ _go to [ViewableImpression](#ViewableImpression_78)_ _(current class)_

```js
// Attach a "Viewable" child to current "ViewableImpression". Return "Viewable" to move on child level.
attachViewable(content: string): Viewable
```

↘ _go to [Viewable](#Viewable_79)_ _(last level element)_

```js
// Add a "NotViewable" child to current "ViewableImpression". Return "ViewableImpression" to stay on same current level.
addNotViewable(content: string): ViewableImpression
```

↘ _go to [ViewableImpression](#ViewableImpression_78)_ _(current class)_

```js
// Attach a "NotViewable" child to current "ViewableImpression". Return "NotViewable" to move on child level.
attachNotViewable(content: string): NotViewable
```

↘ _go to [NotViewable](#NotViewable_80)_ _(last level element)_

```js
// Add a "ViewUndetermined" child to current "ViewableImpression". Return "ViewableImpression" to stay on same current level.
addViewUndetermined(content: string): ViewableImpression
```

↘ _go to [ViewableImpression](#ViewableImpression_78)_ _(current class)_

```js
// Attach a "ViewUndetermined" child to current "ViewableImpression". Return "ViewUndetermined" to move on child level.
attachViewUndetermined(content: string): ViewUndetermined
```

↘ _go to [ViewUndetermined](#ViewUndetermined_81)_ _(last level element)_

<a id="Viewable_79" name="Viewable_79"></a>
## Class Viewable _extends_ VastElement

child of [ViewableImpression](#ViewableImpression_78) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="NotViewable_80" name="NotViewable_80"></a>
## Class NotViewable _extends_ VastElement

child of [ViewableImpression](#ViewableImpression_78) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="ViewUndetermined_81" name="ViewUndetermined_81"></a>
## Class ViewUndetermined _extends_ VastElement

child of [ViewableImpression](#ViewableImpression_78) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="AdVerifications_82" name="AdVerifications_82"></a>
## Class AdVerifications _extends_ VastElement

child of [Wrapper](#Wrapper_72) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Attach a "Verification" child to current "AdVerifications". Return "Verification" to move on child level.
attachVerification(attributes: {
  vendor: string /* required */
}): Verification
```

↘ _go to [Verification](#Verification_83)_

<a id="Verification_83" name="Verification_83"></a>
## Class Verification _extends_ VastElement

child of [AdVerifications](#AdVerifications_82) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "ViewableImpression" child to current "Verification". Return "Verification" to stay on same current level.
addViewableImpression(content: string, attributes: {
  id: string /* required */
}): Verification
```

↘ _go to [Verification](#Verification_83)_ _(current class)_

```js
// Attach a "ViewableImpression" child to current "Verification". Return "ViewableImpression" to move on child level.
attachViewableImpression(content: string, attributes: {
  id: string /* required */
}): ViewableImpression
```

↘ _go to [ViewableImpression](#ViewableImpression_84)_ _(last level element)_

<a id="ViewableImpression_84" name="ViewableImpression_84"></a>
## Class ViewableImpression _extends_ VastElement

child of [Verification](#Verification_83) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Extensions_85" name="Extensions_85"></a>
## Class Extensions _extends_ VastElement

child of [Wrapper](#Wrapper_72) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "Extension" child to current "Extensions". Return "Extensions" to stay on same current level.
addExtension(content: string, attributes: {
  type: string /* required */
}): Extensions
```

↘ _go to [Extensions](#Extensions_85)_ _(current class)_

```js
// Attach a "Extension" child to current "Extensions". Return "Extension" to move on child level.
attachExtension(content: string, attributes: {
  type: string /* required */
}): Extension
```

↘ _go to [Extension](#Extension_86)_ _(last level element)_

<a id="Extension_86" name="Extension_86"></a>
## Class Extension _extends_ VastElement

child of [Extensions](#Extensions_85) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Creatives_87" name="Creatives_87"></a>
## Class Creatives _extends_ VastElement

child of [Wrapper](#Wrapper_72) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Attach a "Creative" child to current "Creatives". Return "Creative" to move on child level.
attachCreative(attributes: {
  id: string /* required */, 
  sequence: string /* required */, 
  adId: string /* required */
}): Creative
```

↘ _go to [Creative](#Creative_88)_

<a id="Creative_88" name="Creative_88"></a>
## Class Creative _extends_ VastElement

child of [Creatives](#Creatives_87) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Attach a "Linear" child to current "Creative". Return "Linear" to move on child level.
attachLinear(): Linear
```

↘ _go to [Linear](#Linear_89)_

```js
// Attach a "NonLinearAds" child to current "Creative". Return "NonLinearAds" to move on child level.
attachNonLinearAds(): NonLinearAds
```

↘ _go to [NonLinearAds](#NonLinearAds_105)_

```js
// Attach a "CompanionAds" child to current "Creative". Return "CompanionAds" to move on child level.
attachCompanionAds(attributes: {
  required:("all"|"any"|"none") /* required */
}): CompanionAds
```

↘ _go to [CompanionAds](#CompanionAds_111)_

<a id="Linear_89" name="Linear_89"></a>
## Class Linear _extends_ VastElement

An uniq one of this child or others at same level are required below Creative in VAST4 spec

child of [Creative](#Creative_88) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Attach a "TrackingEvents" child to current "Linear". Return "TrackingEvents" to move on child level.
attachTrackingEvents(): TrackingEvents
```

↘ _go to [TrackingEvents](#TrackingEvents_90)_

```js
// Attach a "VideoClicks" child to current "Linear". Return "VideoClicks" to move on child level.
attachVideoClicks(): VideoClicks
```

↘ _go to [VideoClicks](#VideoClicks_92)_

```js
// Attach a "Icons" child to current "Linear". Return "Icons" to move on child level.
attachIcons(): Icons
```

↘ _go to [Icons](#Icons_95)_

```js
// Add a "InteractiveCreativeFile" child to current "Linear". Return "Linear" to stay on same current level.
addInteractiveCreativeFile(content: string): Linear
```

↘ _go to [Linear](#Linear_89)_ _(current class)_

```js
// Attach a "InteractiveCreativeFile" child to current "Linear". Return "InteractiveCreativeFile" to move on child level.
attachInteractiveCreativeFile(content: string): InteractiveCreativeFile
```

↘ _go to [InteractiveCreativeFile](#InteractiveCreativeFile_104)_ _(last level element)_

<a id="TrackingEvents_90" name="TrackingEvents_90"></a>
## Class TrackingEvents _extends_ VastElement

child of [Linear](#Linear_89) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "Tracking" child to current "TrackingEvents". Return "TrackingEvents" to stay on same current level.
addTracking(content: string, attributes: {
  offset: string /* required */, 
  event:("mute"|"unmute"|"pause"|"resume"|"rewind"|"skip"|"playerExpand"|"playerCollapse"|"otherAdInteraction"|"start"|"firstQuartile"|"midpoint"|"thirdQuartile"|"complete"|"acceptInvitationLinear"|"timeSpentViewing"|"progress") /* required */
}): TrackingEvents
```

↘ _go to [TrackingEvents](#TrackingEvents_90)_ _(current class)_

```js
// Attach a "Tracking" child to current "TrackingEvents". Return "Tracking" to move on child level.
attachTracking(content: string, attributes: {
  offset: string /* required */, 
  event:("mute"|"unmute"|"pause"|"resume"|"rewind"|"skip"|"playerExpand"|"playerCollapse"|"otherAdInteraction"|"start"|"firstQuartile"|"midpoint"|"thirdQuartile"|"complete"|"acceptInvitationLinear"|"timeSpentViewing"|"progress") /* required */
}): Tracking
```

↘ _go to [Tracking](#Tracking_91)_ _(last level element)_

<a id="Tracking_91" name="Tracking_91"></a>
## Class Tracking _extends_ VastElement

child of [TrackingEvents](#TrackingEvents_90) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="VideoClicks_92" name="VideoClicks_92"></a>
## Class VideoClicks _extends_ VastElement

child of [Linear](#Linear_89) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "ClickTracking" child to current "VideoClicks". Return "VideoClicks" to stay on same current level.
addClickTracking(content: string, attributes: {
  id: string /* required */
}): VideoClicks
```

↘ _go to [VideoClicks](#VideoClicks_92)_ _(current class)_

```js
// Attach a "ClickTracking" child to current "VideoClicks". Return "ClickTracking" to move on child level.
attachClickTracking(content: string, attributes: {
  id: string /* required */
}): ClickTracking
```

↘ _go to [ClickTracking](#ClickTracking_93)_ _(last level element)_

```js
// Add a "CustomClick" child to current "VideoClicks". Return "VideoClicks" to stay on same current level.
addCustomClick(content: string, attributes: {
  id: string /* required */
}): VideoClicks
```

↘ _go to [VideoClicks](#VideoClicks_92)_ _(current class)_

```js
// Attach a "CustomClick" child to current "VideoClicks". Return "CustomClick" to move on child level.
attachCustomClick(content: string, attributes: {
  id: string /* required */
}): CustomClick
```

↘ _go to [CustomClick](#CustomClick_94)_ _(last level element)_

<a id="ClickTracking_93" name="ClickTracking_93"></a>
## Class ClickTracking _extends_ VastElement

child of [VideoClicks](#VideoClicks_92) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="CustomClick_94" name="CustomClick_94"></a>
## Class CustomClick _extends_ VastElement

child of [VideoClicks](#VideoClicks_92) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="Icons_95" name="Icons_95"></a>
## Class Icons _extends_ VastElement

child of [Linear](#Linear_89) ↗

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
  apiFramework: string /* required */, 
  pxratio: string /* required */
}): Icon
```

↘ _go to [Icon](#Icon_96)_

<a id="Icon_96" name="Icon_96"></a>
## Class Icon _extends_ VastElement

At last one of this child and/or others are required below Icons in VAST4 spec

child of [Icons](#Icons_95) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "StaticResource" child to current "Icon". Return "Icon" to stay on same current level.
addStaticResource(content: string, attributes: {
  creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash") /* required */
}): Icon
```

↘ _go to [Icon](#Icon_96)_ _(current class)_

```js
// Attach a "StaticResource" child to current "Icon". Return "StaticResource" to move on child level.
attachStaticResource(content: string, attributes: {
  creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash") /* required */
}): StaticResource
```

↘ _go to [StaticResource](#StaticResource_97)_ _(last level element)_

```js
// Add a "IFrameResource" child to current "Icon". Return "Icon" to stay on same current level.
addIFrameResource(content: string): Icon
```

↘ _go to [Icon](#Icon_96)_ _(current class)_

```js
// Attach a "IFrameResource" child to current "Icon". Return "IFrameResource" to move on child level.
attachIFrameResource(content: string): IFrameResource
```

↘ _go to [IFrameResource](#IFrameResource_98)_ _(last level element)_

```js
// Add a "HTMLResource" child to current "Icon". Return "Icon" to stay on same current level.
addHTMLResource(content: string): Icon
```

↘ _go to [Icon](#Icon_96)_ _(current class)_

```js
// Attach a "HTMLResource" child to current "Icon". Return "HTMLResource" to move on child level.
attachHTMLResource(content: string): HTMLResource
```

↘ _go to [HTMLResource](#HTMLResource_99)_ _(last level element)_

```js
// Attach a "IconClicks" child to current "Icon". Return "IconClicks" to move on child level.
attachIconClicks(): IconClicks
```

↘ _go to [IconClicks](#IconClicks_100)_

```js
// Add a "IconViewTracking" child to current "Icon". Return "Icon" to stay on same current level.
addIconViewTracking(content: string): Icon
```

↘ _go to [Icon](#Icon_96)_ _(current class)_

```js
// Attach a "IconViewTracking" child to current "Icon". Return "IconViewTracking" to move on child level.
attachIconViewTracking(content: string): IconViewTracking
```

↘ _go to [IconViewTracking](#IconViewTracking_103)_ _(last level element)_

<a id="StaticResource_97" name="StaticResource_97"></a>
## Class StaticResource _extends_ VastElement

child of [Icon](#Icon_96) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="IFrameResource_98" name="IFrameResource_98"></a>
## Class IFrameResource _extends_ VastElement

child of [Icon](#Icon_96) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="HTMLResource_99" name="HTMLResource_99"></a>
## Class HTMLResource _extends_ VastElement

child of [Icon](#Icon_96) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="IconClicks_100" name="IconClicks_100"></a>
## Class IconClicks _extends_ VastElement

child of [Icon](#Icon_96) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "IconClickThrough" child to current "IconClicks". Return "IconClicks" to stay on same current level.
addIconClickThrough(content: string): IconClicks
```

↘ _go to [IconClicks](#IconClicks_100)_ _(current class)_

```js
// Attach a "IconClickThrough" child to current "IconClicks". Return "IconClickThrough" to move on child level.
attachIconClickThrough(content: string): IconClickThrough
```

↘ _go to [IconClickThrough](#IconClickThrough_101)_ _(last level element)_

```js
// Add a "IconClickTracking" child to current "IconClicks". Return "IconClicks" to stay on same current level.
addIconClickTracking(content: string): IconClicks
```

↘ _go to [IconClicks](#IconClicks_100)_ _(current class)_

```js
// Attach a "IconClickTracking" child to current "IconClicks". Return "IconClickTracking" to move on child level.
attachIconClickTracking(content: string): IconClickTracking
```

↘ _go to [IconClickTracking](#IconClickTracking_102)_ _(last level element)_

<a id="IconClickThrough_101" name="IconClickThrough_101"></a>
## Class IconClickThrough _extends_ VastElement

child of [IconClicks](#IconClicks_100) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="IconClickTracking_102" name="IconClickTracking_102"></a>
## Class IconClickTracking _extends_ VastElement

child of [IconClicks](#IconClicks_100) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="IconViewTracking_103" name="IconViewTracking_103"></a>
## Class IconViewTracking _extends_ VastElement

child of [Icon](#Icon_96) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="InteractiveCreativeFile_104" name="InteractiveCreativeFile_104"></a>
## Class InteractiveCreativeFile _extends_ VastElement

child of [Linear](#Linear_89) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="NonLinearAds_105" name="NonLinearAds_105"></a>
## Class NonLinearAds _extends_ VastElement

An uniq one of this child or others at same level are required below Creative in VAST4 spec

child of [Creative](#Creative_88) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Attach a "NonLinear" child to current "NonLinearAds". Return "NonLinear" to move on child level.
attachNonLinear(): NonLinear
```

↘ _go to [NonLinear](#NonLinear_106)_

```js
// Attach a "TrackingEvents" child to current "NonLinearAds". Return "TrackingEvents" to move on child level.
attachTrackingEvents(): TrackingEvents
```

↘ _go to [TrackingEvents](#TrackingEvents_109)_

<a id="NonLinear_106" name="NonLinear_106"></a>
## Class NonLinear _extends_ VastElement

child of [NonLinearAds](#NonLinearAds_105) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "NonLinearClickThrough" child to current "NonLinear". Return "NonLinear" to stay on same current level.
addNonLinearClickThrough(content: string): NonLinear
```

↘ _go to [NonLinear](#NonLinear_106)_ _(current class)_

```js
// Attach a "NonLinearClickThrough" child to current "NonLinear". Return "NonLinearClickThrough" to move on child level.
attachNonLinearClickThrough(content: string): NonLinearClickThrough
```

↘ _go to [NonLinearClickThrough](#NonLinearClickThrough_107)_ _(last level element)_

```js
// Add a "NonLinearClickTracking" child to current "NonLinear". Return "NonLinear" to stay on same current level.
addNonLinearClickTracking(content: string): NonLinear
```

↘ _go to [NonLinear](#NonLinear_106)_ _(current class)_

```js
// Attach a "NonLinearClickTracking" child to current "NonLinear". Return "NonLinearClickTracking" to move on child level.
attachNonLinearClickTracking(content: string): NonLinearClickTracking
```

↘ _go to [NonLinearClickTracking](#NonLinearClickTracking_108)_ _(last level element)_

<a id="NonLinearClickThrough_107" name="NonLinearClickThrough_107"></a>
## Class NonLinearClickThrough _extends_ VastElement

child of [NonLinear](#NonLinear_106) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="NonLinearClickTracking_108" name="NonLinearClickTracking_108"></a>
## Class NonLinearClickTracking _extends_ VastElement

child of [NonLinear](#NonLinear_106) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="TrackingEvents_109" name="TrackingEvents_109"></a>
## Class TrackingEvents _extends_ VastElement

child of [NonLinearAds](#NonLinearAds_105) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "Tracking" child to current "TrackingEvents". Return "TrackingEvents" to stay on same current level.
addTracking(content: string, attributes: {
  event:("mute"|"unmute"|"pause"|"resume"|"rewind"|"skip"|"playerExpand"|"playerCollapse"|"otherAdInteraction"|"creativeView"|"acceptInvitation"|"adExpand"|"adCollapse"|"minimize"|"close"|"overlayViewDuration") /* required */
}): TrackingEvents
```

↘ _go to [TrackingEvents](#TrackingEvents_109)_ _(current class)_

```js
// Attach a "Tracking" child to current "TrackingEvents". Return "Tracking" to move on child level.
attachTracking(content: string, attributes: {
  event:("mute"|"unmute"|"pause"|"resume"|"rewind"|"skip"|"playerExpand"|"playerCollapse"|"otherAdInteraction"|"creativeView"|"acceptInvitation"|"adExpand"|"adCollapse"|"minimize"|"close"|"overlayViewDuration") /* required */
}): Tracking
```

↘ _go to [Tracking](#Tracking_110)_ _(last level element)_

<a id="Tracking_110" name="Tracking_110"></a>
## Class Tracking _extends_ VastElement

child of [TrackingEvents](#TrackingEvents_109) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="CompanionAds_111" name="CompanionAds_111"></a>
## Class CompanionAds _extends_ VastElement

An uniq one of this child or others at same level are required below Creative in VAST4 spec

child of [Creative](#Creative_88) ↗

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
  adSlotID: string /* required */, 
  logoTile: string /* required */, 
  logoTitle: string /* required */, 
  logoArtist: string /* required */, 
  logoURL: string /* required */, 
  pxratio: string /* required */
}): Companion
```

↘ _go to [Companion](#Companion_112)_

<a id="Companion_112" name="Companion_112"></a>
## Class Companion _extends_ VastElement

child of [CompanionAds](#CompanionAds_111) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "StaticResource" child to current "Companion". Return "Companion" to stay on same current level.
addStaticResource(content: string, attributes: {
  creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash") /* required */
}): Companion
```

↘ _go to [Companion](#Companion_112)_ _(current class)_

```js
// Attach a "StaticResource" child to current "Companion". Return "StaticResource" to move on child level.
attachStaticResource(content: string, attributes: {
  creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash") /* required */
}): StaticResource
```

↘ _go to [StaticResource](#StaticResource_113)_ _(last level element)_

```js
// Add a "IFrameResource" child to current "Companion". Return "Companion" to stay on same current level.
addIFrameResource(content: string): Companion
```

↘ _go to [Companion](#Companion_112)_ _(current class)_

```js
// Attach a "IFrameResource" child to current "Companion". Return "IFrameResource" to move on child level.
attachIFrameResource(content: string): IFrameResource
```

↘ _go to [IFrameResource](#IFrameResource_114)_ _(last level element)_

```js
// Add a "HTMLResource" child to current "Companion". Return "Companion" to stay on same current level.
addHTMLResource(content: string): Companion
```

↘ _go to [Companion](#Companion_112)_ _(current class)_

```js
// Attach a "HTMLResource" child to current "Companion". Return "HTMLResource" to move on child level.
attachHTMLResource(content: string): HTMLResource
```

↘ _go to [HTMLResource](#HTMLResource_115)_ _(last level element)_

```js
// Add a "AdParameters" child to current "Companion". Return "Companion" to stay on same current level.
addAdParameters(content: string, attributes: {
  xmlEncoded: string /* required */
}): Companion
```

↘ _go to [Companion](#Companion_112)_ _(current class)_

```js
// Attach a "AdParameters" child to current "Companion". Return "AdParameters" to move on child level.
attachAdParameters(content: string, attributes: {
  xmlEncoded: string /* required */
}): AdParameters
```

↘ _go to [AdParameters](#AdParameters_116)_ _(last level element)_

```js
// Add a "AltText" child to current "Companion". Return "Companion" to stay on same current level.
addAltText(content: string): Companion
```

↘ _go to [Companion](#Companion_112)_ _(current class)_

```js
// Attach a "AltText" child to current "Companion". Return "AltText" to move on child level.
attachAltText(content: string): AltText
```

↘ _go to [AltText](#AltText_117)_ _(last level element)_

```js
// Add a "CompanionClickThrough" child to current "Companion". Return "Companion" to stay on same current level.
addCompanionClickThrough(content: string): Companion
```

↘ _go to [Companion](#Companion_112)_ _(current class)_

```js
// Attach a "CompanionClickThrough" child to current "Companion". Return "CompanionClickThrough" to move on child level.
attachCompanionClickThrough(content: string): CompanionClickThrough
```

↘ _go to [CompanionClickThrough](#CompanionClickThrough_118)_ _(last level element)_

```js
// Add a "CompanionClickTracking" child to current "Companion". Return "Companion" to stay on same current level.
addCompanionClickTracking(content: string, attributes: {
  id: string /* required */
}): Companion
```

↘ _go to [Companion](#Companion_112)_ _(current class)_

```js
// Attach a "CompanionClickTracking" child to current "Companion". Return "CompanionClickTracking" to move on child level.
attachCompanionClickTracking(content: string, attributes: {
  id: string /* required */
}): CompanionClickTracking
```

↘ _go to [CompanionClickTracking](#CompanionClickTracking_119)_ _(last level element)_

```js
// Attach a "TrackingEvents" child to current "Companion". Return "TrackingEvents" to move on child level.
attachTrackingEvents(): TrackingEvents
```

↘ _go to [TrackingEvents](#TrackingEvents_120)_

<a id="StaticResource_113" name="StaticResource_113"></a>
## Class StaticResource _extends_ VastElement

child of [Companion](#Companion_112) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="IFrameResource_114" name="IFrameResource_114"></a>
## Class IFrameResource _extends_ VastElement

child of [Companion](#Companion_112) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="HTMLResource_115" name="HTMLResource_115"></a>
## Class HTMLResource _extends_ VastElement

child of [Companion](#Companion_112) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="AdParameters_116" name="AdParameters_116"></a>
## Class AdParameters _extends_ VastElement

child of [Companion](#Companion_112) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="AltText_117" name="AltText_117"></a>
## Class AltText _extends_ VastElement

child of [Companion](#Companion_112) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="CompanionClickThrough_118" name="CompanionClickThrough_118"></a>
## Class CompanionClickThrough _extends_ VastElement

child of [Companion](#Companion_112) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="CompanionClickTracking_119" name="CompanionClickTracking_119"></a>
## Class CompanionClickTracking _extends_ VastElement

child of [Companion](#Companion_112) ↗

_no specific methods see [VastElement](#VastElement)_
<a id="TrackingEvents_120" name="TrackingEvents_120"></a>
## Class TrackingEvents _extends_ VastElement

child of [Companion](#Companion_112) ↗

### methods

_all herited from [VastElement](#VastElement)_ and : 

```js
// Add a "Tracking" child to current "TrackingEvents". Return "TrackingEvents" to stay on same current level.
addTracking(content: string, attributes: {
  event:("creativeView") /* required */
}): TrackingEvents
```

↘ _go to [TrackingEvents](#TrackingEvents_120)_ _(current class)_

```js
// Attach a "Tracking" child to current "TrackingEvents". Return "Tracking" to move on child level.
attachTracking(content: string, attributes: {
  event:("creativeView") /* required */
}): Tracking
```

↘ _go to [Tracking](#Tracking_121)_ _(last level element)_

<a id="Tracking_121" name="Tracking_121"></a>
## Class Tracking _extends_ VastElement

child of [TrackingEvents](#TrackingEvents_120) ↗

_no specific methods see [VastElement](#VastElement)_