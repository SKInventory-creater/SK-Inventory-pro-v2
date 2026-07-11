import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  serverTimestamp
} from "firebase/firestore";

import { db } from "./config.js";

/* Collection Reference */
export const bundlesRef = collection(db, "bundles");
export const itemsRef = collection(db, "items");

/* =========================
   Bundle Functions
========================= */

export async function createBundle(data) {
  return await addDoc(bundlesRef, {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  });
}

export async function getBundles() {
  const q = query(bundlesRef, orderBy("createdAt", "desc"));
  return await getDocs(q);
}

export async function getBundle(id) {
  return await getDoc(doc(db, "bundles", id));
}

export async function updateBundle(id, data) {
  return await updateDoc(doc(db, "bundles", id), {
    ...data,
    updatedAt: serverTimestamp()
  });
}

export async function deleteBundle(id) {
  return await deleteDoc(doc(db, "bundles", id));
}

/* =========================
   Item Functions
========================= */

export async function createItem(data) {
  return await addDoc(itemsRef, {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  });
}

export async function getItems(bundleId) {
  const q = query(
    itemsRef,
    where("bundleId", "==", bundleId),
    orderBy("createdAt", "desc")
  );

  return await getDocs(q);
}

export async function updateItem(id, data) {
  return await updateDoc(doc(db, "items", id), {
    ...data,
    updatedAt: serverTimestamp()
  });
}

export async function deleteItem(id) {
  return await deleteDoc(doc(db, "items", id));
}
