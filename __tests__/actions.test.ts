// __tests__/actions.test.ts
import { fetchProducts } from "@/lib/features/products/FetchDataSlice";
import { setupStore } from "@/lib/store";

test("fetchProducts action", async () => {
  const store = setupStore();
  await store.dispatch(fetchProducts());
  const state = store.getState();
  expect(state.products.products).toHaveLength(100);
});
