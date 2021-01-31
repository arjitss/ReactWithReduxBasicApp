// This file is to configure Enzyme. This is use to pull in enzyme adaptor for particular version of React

import { configure } from "enzyme";
import Adaptor from "enzyme-adapter-react-16";
configure({ adaptor: new Adaptor() });
