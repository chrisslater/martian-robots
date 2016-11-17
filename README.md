# Martian Robots

Hello please find the copy of my very incomplete Martian Robots test.

There is currently no user interface for this app =(.
After quickly realising I wouldn't have time to finish it in the time, I decided to focus on a single part.

I am reasonably happy with what I have done so far with the exception of the Grid.updateCoordinate method which is dirty but passes.

## Checklist

* Create user input interface [ ]
* Create input -> engine processor [ ]
* Set maximum Coordinate boundries and handle exceeding them [ ]
* Set max instruction length and handling exceeding instructions length [ ]
* Create Engine [*]
* Handle moving forwards [*]
* Handle rotation [*]
* Handle going beyond boundry [*]
* Validation for ignoring movement on hitting 'scent' [ ]
* Storing result in state for recursing through robots [ ]
* Create output interface [ ]

## Scenarios

* Scenario 1 [*]
* Scenario 2 [*]
* Scenario 3 [ ]

## Some improvements

* Use symbols instead of string variables, i.e: for 'LOST'
* Move rotation code to a new Rotation Class
* Refactor Grid.updateCoordinate as its very copy paste


## Install instructions

1. Install using yarn or npm

```
yarn install || npm install
```

2. Run Typescript transpiler, don't be alarmed when you see this npm Error. It is because not all Types are valid

```
npm run build
```

3. Run tests, again don't be alarmed when this fails. It is because scenario 3 does not pass

```
npm run test
```

4. Optional run the coverage

```
npm run test:report
```


