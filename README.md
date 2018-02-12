 [![Build Status](https://travis-ci.org/DavidBabel/vast-builder.svg?branch=master)](https://travis-ci.org/DavidBabel/vast-builder)

# vast-builder

This library offer a complete support for IAB Video Ad Serving Template standard: VAST2, VAST3 and VAST4

![IAB Logo](https://vignette.wikia.nocookie.net/logopedia/images/c/c5/IAB_logo_2008.svg/revision/latest?cb=20110130174537 "IAB Logo")


Main features are :

- standard Vast xml generation
- Vast validation based on specifications
- full JSdoc for functionnal intellisense autocomplete (including params)

with only **one** stand alone dependancie.

All APIs are directly generated on top of standard IAB specifications documents : https://www.iab.com/vast/

**Donations:** If you like this package, want it to be maintened and use it to makes millions, you can buy me [a coffee](https://www.paypal.me/devilhunter/2) ☕ or [a beer](https://www.paypal.me/devilhunter/4) 🍺.

## Getting started

### Install

It requires node 8 or above.

```bash
# with npm
npm i vast-builder --save

# with yarn
yarn add vast-builder
```

### Create empty VAST

```js
const createVast = require('vast-builder');

// vast1 is deprecated and not supported
const vast2 = createVast.v2(options);
const vast3 = createVast.v3(options);
const vast4 = createVast.v4(options);
```

### Sample

Here is a sample VAST3 Ad :

```js
const vast3 = createVast.v3();
vast3.attachAd()
  .attachInLine()
  .addImpression('imp_link')
  .addAdSystem('Society')
  .addAdTitle('Title')
  .attachCreatives()
  .attachCreative()
  .attachLinear()
  .attachTrackingEvents()
  .attachTracking('content',{event:'start'}).back()
  .addDuration('00:30:00')
  .attachMediaFiles()
  .attachMediaFile('my_video', {
    delivery: 'streaming',
    type: 'video/mp4',
    width: '600',
    height: '400'
  })
  .back()
  .attachIcons()
  .attachIcon({
    program: 'my_program',
    width: '50',
    height: '50',
    xPosition: 'bottom',
    yPosition: 'left'
  })
  .attachStaticResource('ressource_link', {creativeType:'image/jpeg'})

const render = vast3.toXml();
```

Will render this VAST :

```xml
<?xml version="1.0" encoding="utf-8"?>
<VAST version="3.0">
  <Ad>
    <InLine>
      <Impression><![CDATA[imp_link]]></Impression>
      <AdSystem><![CDATA[Society]]></AdSystem>
      <AdTitle><![CDATA[Title]]></AdTitle>
      <Creatives>
        <Creative>
          <Linear>
            <TrackingEvents>
              <Tracking event="start"><![CDATA[content]]></Tracking>
            </TrackingEvents>
            <Duration><![CDATA[00:30:00]]></Duration>
            <MediaFiles>
              <MediaFile delivery="streaming" type="video/mp4" width="600" height="400"><![CDATA[my_video]]></MediaFile>
            </MediaFiles>
            <Icons>
              <Icon program="my_program" width="50" height="50" xPosition="bottom" yPosition="left">
                <StaticResource creativeType="image/jpeg"><![CDATA[ressource_link]]></StaticResource>
              </Icon>
            </Icons>
          </Linear>
        </Creative>
      </Creatives>
    </InLine>
  </Ad>
</VAST>
```

You can also use intermediates objects, the result will be exactly the same :

```js
const vast3 = createVast.v3();
const Ad = vast3.attachAd();
const InLine = Ad.attachInLine();
Inline.addImpression('imp_link');
Inline.addAdSystem('Society');
Inline.addAdTitle('Title');
const Creatives = Inline.attachCreatives();
// etc ...
```

## Fast learn

This is a recursive API, meaning **all** elements can invoke all same methods from each returned object. This way and you can navigate between elements easly.

As XML is a tree, in this API:

- when you **"attach"** an element to another, you move on the new child a level lower
- when you **"add"** an element to another, you stay on the current object on the same level

Here is a demo with helping indentation :

```js
  vast3.attachAd()                   // Ad
    .attachInLine()                  //  Inline
      .addImpression('imp_link')     //  Inline : add = same level
      .addAdSystem('Society')        //  Inline
      .attachCreatives()             //   Creatives : attach = lower level
        .attachCreative()            //    Creative
          .attachLinear()            //     Linear
            .attachTrackingEvents()  //      TrackingEvents
            .addTracking('s',        //       TrackingEvents
              {event: 'start'}
            )
          .and()                     //     Linear : and = upper level
          .addDuration('00:30:00')   //     Linear
          .attachMediaFiles()        //      MediaFiles
  // etc ...
```

## API

This package does no magic under the hood, the API is very redondant and always the same, for easy learn and easy maintainability

### Full API

Full APIs are availables here :

- [APIv2](https://github.com/DavidBabel/vast-builder/blob/master/build/doc/vast2.md)
- [APIv3](https://github.com/DavidBabel/vast-builder/blob/master/build/doc/vast3.md)
- [APIv4](https://github.com/DavidBabel/vast-builder/blob/master/build/doc/vast4.md)

### Common Node API

Every elements inherits from a generic VastElement, all methods return a VastElement child allowing to chain methods calls.

```js
// You can init Tag with nothing, content, attribute or both
// each detailled methods signature is available in full documentation (below)

// add*()
// return the current VastElement itself, allowing chaining at same level
// nb: Replace ValidTag by a spec valid tag, depending on current VastElement
VastElement.addValidTag();
VastElement.addValidTag(content);
VastElement.addValidTag(attributes);
VastElement.addValidTag(content, attributes);

// attach*()
// return VastElement child, alowing chaining at lower level
// nb: Replace ValidTag by a spec valid tag, depending on current VastElement
VastElement.attachValidTag();
VastElement.attachValidTag(content);
VastElement.attachValidTag(attributes);
VastElement.attachValidTag(content, attributes);

// dangerouslyAttachCustomTag
// dangerouslyAddCustomTag
// attach or add wathever Tag you need, usefull for <Extensions> childs
// name is the <Tag> you want, cannot be validated
const child = VastElement.dangerouslyAttachCustomTag(tagName, content, attributes);
const self  = VastElement.dangerouslyAddCustomTag(tagName, content, attributes);

// and: can be called on every object to return the parent tag
const father = VastElement.and();

// back: is an alias for element.and().and()
const grandFather = VastElement.back();

// cdata: turn content into cdata, return the current object
// nb: if option cdata is true, it does nothing
VastElement.cdata();

// content: return the string content (without any cdata)
const stringContent = VastElement.content;

// content: return the raw attributes object
const attributes = VastElement.attrs;

// getAttrs: return sanitized attributes object (invalid attributes are removed)
const attrsObject = VastElement.getAttrs();

// getChilds: return an array with childs filtered by "name"
const childs = VastElement.getChilds(name);
// nb: childs are available via :
const childs = VastElement.childs;

// getVastVersion: return an integer of current vast version
const intVersion = VastElement.getVastVersion();

// validate: assert the entire VAST is valid
// nb: if "logWarn" option is true, it will print errors to stderr
// nb: if "throwOnError" option is true, it will throw an exception if the vast is not valid
const boolValid = VastElement.validate();

// toXml: return the generated Vast xml string
const xmlVast = VastElement.toXml();
```

## Options

You can pass options to the `createVast.vX(options)` method.
Availables options are :

| Option                | Default | Description |
|:----------------------|:--------|:------------|
| `cdata`               | `true`  | Force all contents to use `<![CDATA[ ]]></a>` tags. |
| `logWarn`             | `true`  | Validation warning and error will be printed to stderr. |
| `throwOnError`        | `false` | Validation errors will now throw an exception. |
| `validateOnBuild`     | `false` | Run a validation before build, usefull for development environment. |
| `spaces`              | `2`     | Number of spaces to be used for indenting XML output. Passing characters like `' '` or `'\t'` are also accepted. |

Following options are also available and inherited from awesome [xml-js](https://www.npmjs.com/package/xml-js) package :

| Option                | Default | Description |
|:----------------------|:--------|:------------|
| `fullTagEmptyElement` | `false` | Whether to produce element without sub-elements as full tag pairs `<a></a>` rather than self closing tag `<a/>`. |
| `indentCdata`         | `false` | Whether to write CData in a new line and indent it. Will generate `<a>\n <![CDATA[foo]]></a>` instead of `<a><![CDATA[foo]]></a>`. |
| `indentAttributes`    | `false` | Whether to print attributes across multiple lines and indent them (when `spaces` is not `0`). |
| `ignoreDeclaration`   | `false` | Whether to ignore writing declaration directives of xml. For example, `<?xml?>` will be ignored. |
| `ignoreInstruction`   | `false` | Whether to ignore writing processing instruction of xml. For example, `<?go there?>` will be ignored. |
| `ignoreAttributes`    | `false` | Whether to ignore writing attributes of the elements. For example, `x="1"` in `<a x="1"></a>` will be ignored |
| `ignoreComment`       | `false` | Whether to ignore writing comments of the elements. That is, no `<!--  -->` will be generated. |
| `ignoreCdata`         | `false` | Whether to ignore writing CData of the elements. That is, no `<![CDATA[ ]]>` will be generated. |
| `ignoreDoctype`       | `false` | Whether to ignore writing Doctype of the elements. That is, no `<!DOCTYPE >` will be generated. |
| `ignoreText`          | `false` | Whether to ignore writing texts of the elements. For example, `hi` text in `<a>hi</a>` will be ignored. |

## Contribute

All PR are welcome. This project and it's documentation are automatically generated from specs/*.yml files.

This command do all builds :

```bash
yarn build-api
```

The tests fixtures are generated by the tests if they not existed. To clean them use :

```bash
yarn clean-fixtures
```

Thinks to check in the next commit if the result is still valid.

### Stress test

You can clone this project to compare performance between this package and a native based one (vast-xml) : https://github.com/DavidBabel/vast-builder-stress-test

Actual mesured speed test for 50000 generated VAST is :

- this package: 30s
- vast-xml package: 29s

but we have a much better api

## License

MIT. Copyright (c) David Babel.