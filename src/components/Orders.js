import {useEffect, useState} from "react";
import {useStateValue} from "../state/StateProvider";
import {db} from "../firebase";
import {collection, doc, onSnapshot, orderBy} from 'firebase/firestore';
import Order from "./Order";
import './Orders.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const [state, dispatch] = useStateValue();

  useEffect(() => {
    if (state.user) {
      const colRef = collection(db, 'users');
      // ************ below code line may be wrong ************
      onSnapshot(doc(colRef, state.user?.uid, ('orders'.orderBy('created', 'desc'))), (snapshot => {
        setOrders(snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data()
        })));
      }));
    } else {
      setOrders([]);
    }
  }, [state.user]);

  return (
    <div className="orders">
      <h1>Orders</h1>

      <div className="orders__order">
        {orders?.map(order => (
          <Order order={order}/>
        ))}
      </div>
    </div>
  );
};

export default Orders;
