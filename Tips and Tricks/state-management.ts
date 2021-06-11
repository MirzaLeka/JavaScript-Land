// Adds new changes to state without overriding the other flags

type State = {
  [key in string]: any
}

const state: State = {
  username: {},
  country: {},
  premium: false
}

var changes = {
  account: { currentValue: { name: 'mike' }, previous: null },
  country: { currentValue: { countryIsoCode: 'USA' }, previous: undefined },
  premium: { currentValue: true, previous: false }
}

function setState(newState: SimpleChanges) { // angular/@core
  // const formattedChanges = Object.values(newState).map((c: any) => c.currentValue);

  Object.keys(newState).forEach((k: string, i: number) => {
    state[k] = newState[k].currentValue;
    // fiscalStatusState[k] = formattedChanges[i];
  })

  console.log(state);
}

console.log(state);
setState(changes);
setState({ premium: { currentValue: false } });
setState({ country: { currentValue: { countryIsoCode: 'ITA' } } });
setState({ 
  country: { currentValue: { countryIsoCode: 'TUR' } }, 
  premium: { currentValue: true }, 
  id: { currentValue: 'myId' } 
  });

/*
[LOG]: {
  "account": {},
  "country": {},
  "premium": false
} 
[LOG]: {
  "account": {
    "username": "mike"
  },
  "country": {
    "countryIsoCode": "USA"
  },
  "premium": true
} 
[LOG]: {
  "account": {
    "username": "mike"
  },
  "country": {
    "countryIsoCode": "USA"
  },
  "premium": false
} 
[LOG]: {
  "account": {
    "username": "mike"
  },
  "country": {
    "countryIsoCode": "ITA"
  },
  "premium": false
} 
[LOG]: {
  "account": {
    "username": "mike"
  },
  "country": {
    "countryIsoCode": "TUR"
  },
  "premium": true,
  "wrapperId": "myId"
}  */
