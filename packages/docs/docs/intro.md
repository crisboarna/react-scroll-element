---
sidebar_position: 1
---

# Introduction

Let's discover **react-scroll-element in less than 5 minutes**.

## Getting Started

Get started by **adding the lib as a dependency**.

```bash
yarn add react-scroll-element
```

## Importing
```typescript
import ScrollElement from 'react-scroll-element';
```

### What you'll need

- [Node.js](https://nodejs.org/en/download/):
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/) (Optional)

## Description
Provides a percentage completion bar for each entry with highly customizable look and behaviour.

Color of both icon and symbol can be changed according to desire/theme.

## Properties

### type
Requirement: optional

Default: `chevron`

Icon to be rendered. Please check documentation for available options.

### text
Requirement: optional

Default: none

Optional text to be displayed

### colorIcon
Requirement: optional

Default: '#ffffff'

Optional icon color to be used

### colorIconFade
Requirement: optional

Default: '#ffffff19'

Optional icon color to be used for fade effect. Only applies to a subset of the available icons.

Parameter needs to be in full 6 character hexadecimal format.

### colorText
Requirement: optional

Default: '#ffffff'

Optional text color to be used


## Example

```typescript jsx
import ScrollElement from 'react-scroll-element';

<ScrollElement type={"chevron"} text={"scroll"} colorIcon={"#fff"} colorText={"#fff"}/>
```
