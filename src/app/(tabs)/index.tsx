
import EditScreenInfo from '@/src/components/EditScreenInfo';
import { View } from '@/src/components/Themed';
import products from '../../../assets/data/products';
import ProductListItem from '@/src/components/productListItem';

const product = products[0];




export default function MenuScreen() {
  return (
    <View>
      <ProductListItem product={products[0]} />
      <ProductListItem product={products[2]} />
    </View>
  );
}
