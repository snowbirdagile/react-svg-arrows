# react-svg-arrows

Draw svg arrows between DOM elements in React. You can find the original project [react-archer!](https://github.com/pierpo/react-archer)

## Installation

`npm install react-svg-arrows --save` or `yarn add react-svg-arrows`

## Example

```jsx
import { ArrowContainer, ArrowElement } from 'react-archer';

const rootStyle = { display: 'flex', justifyContent: 'center' };
const rowStyle = { margin: '200px 0', display: 'flex', justifyContent: 'space-between', }
const boxStyle = { padding: '10px', border: '1px solid black', };

const App = () => {
  return (
    <div>

      <ArrowContainer strokeColor='red' >
        <div style={rootStyle}>
          <ArrowElement
            id="root"
            relations={[{
              targetId: 'element2',
              targetAnchor: 'top',
              sourceAnchor: 'bottom',
            }]}
          >
            <div style={boxStyle}>Root</div>
          </ArrowElement>
        </div>

        <div style={rowStyle}>
          <ArrowElement
            id="element2"
            relations={[{
              targetId: 'element3',
              targetAnchor: 'left',
              sourceAnchor: 'right',
              style: { strokeColor: 'blue', strokeWidth: 1 },
              label: <div style={{ marginTop: '-20px' }}>Arrow 2</div>,
            }]}
          >
            <div style={boxStyle}>Element 2</div>
          </ArrowElement>

          <ArrowElement id="element3">
            <div style={boxStyle}>Element 3</div>
          </ArrowElement>

          <ArrowElement
            id="element4"
            relations={[{
              targetId: 'root',
              targetAnchor: 'right',
              sourceAnchor: 'left',
              label: 'Arrow 3',
            }]}
          >
            <div style={boxStyle}>Element 4</div>
          </ArrowElement>
        </div>
      </ArrowContainer>

    </div>
  );
}

export default App;
```

## API

### `ArrowContainer`

| Name | Type | Description |
| - | - | - |
| `strokeColor` | `string` | A color string `'#ff0000'`
| `strokeWidth` | `number` | A size in `px`
| `arrowLength` | `number` | A size in `px`
| `arrowThickness` | `number` | A size in `px`
| `children` | `React.Node` |

### `ArrowElement`

| Name | Type | Description |
| - | - | - |
| `id` | `string` | The id that will identify the Archer Element. Should only contain alphanumeric characters and standard characters that you can find in HTML ids.
| `children` | `React.Node` |
| `relations` | `Array<Relation>` |

The `Relation` type has the following shape:

```javascript
{
  targetId: string,
  targetAnchor: 'top' | 'bottom' | 'left' | 'right',
  sourceAnchor: 'top' | 'bottom' | 'left' | 'right',
  label: React.Node,
  style: Style,
}
```

The `Style` type has the following shape:

```javascript
{
  strokeColor: string,
  strokeWidth: number,
  arrowLength: number,
  arrowThickness: number
}
```
