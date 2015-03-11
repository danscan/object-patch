# object-patch
Deep object extend / merge with a mongo-like $inc operator.

## Usage

```javascript
var patch = require('object-patch');

var document = {
  name: 'Dan Scanlon',
  grade: 6,
  country: 'USA',
  state: 'PA',
  rewardPoints: {
    outstanding: 600,
    total: 12000,
    monthly: []
  }
};

var documentPatch = {
  school: 'SAHS',
  grade: 7,
  rewardPoints: {
    outstanding: { $inc: 200 },
    total: { $inc: 200 }
  }
};

patch(document, documentPatch);
> {
  name: 'Dan Scanlon',
  grade: 7,
  country: 'USA',
  school: 'SAHS',
  state: 'PA',
  rewardPoints: {
    outstanding: 800,
    total: 12200,
    monthly: []
  }
}
```
