import "@testing-library/jest-dom/extend-expect"
import { configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import "jest-styled-components"

// React 16 Enzyme adapter
configure({ adapter: new Adapter() })
