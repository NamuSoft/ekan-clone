import { proxy } from "valtio";

type State = {
  open: boolean;
};

const state = proxy<State>({
  open: false,
});

const NavbarStore = {
  state,

  open() {
    state.open = true;
  },

  close() {
    state.open = false;
  },

  toggle(){
    state.open = !state.open
  }
};

export default NavbarStore;
