

```
└── App
    ├── BlogPost
    │   ├── Comment
    │   ├── Comment
    │   └── Comment
    │
    └── ColorBox
        └── ColorBox
            └── ColorBox
                └── ColorBox (etc.)
```

#### `ColorBox` Component

- should expect a single prop (an opacity value), which can be used in the
  component via: `this.props.opacity`. This prop is first passed in `src/App.js`
- if the opacity value 
  - the `ColorBox` component should render another `ColorBox` itself (recursive
    components!)
  - an opacity prop should be passed to the child
  - the passed opacity prop should be reduced by 0.1

###### Hint on ColorBox

- You may find that subtracting 0.1 from your opacity prop is leading to some
  strange precision errors (try logging the opacity prop with each render). This
  is due to limitations with JavaScript float (number) types.

```js
class Example extends Component {
	render() {
		const newValue = this.props.value * 2;

		if (this.props.value < 100) {
			return (
				<div>
					<Example value={newValue} />
				</div>
			);
		} else {
			return null;
		}
	}
}
```

## Resources

- [React Documentation: Components](https://reactjs.org/docs/react-component.html)

<p class='util--hide'>View <a href='https://learn.co/lessons/react-dynamic-components-lab'>Dynamic Components Lab</a> on Learn.co and start learning to code for free.</p>
