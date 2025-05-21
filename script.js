import { db } from "./firebase-config.js";
import {
  doc,
  getDoc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

window.useCoupon = async function(code) {
  const statusEl = document.getElementById("status");

  try {
    const couponRef = doc(db, "coupons", code);
    const couponSnap = await getDoc(couponRef);

    if (!couponSnap.exists()) {
      statusEl.innerText = "❌ Bu kupon geçersiz.";
      return;
    }

    const data = couponSnap.data();
    if (data.used) {
      statusEl.innerText = "⚠️ Bu kupon zaten kullanılmış.";
      return;
    }

    await updateDoc(couponRef, { used: true });
    statusEl.innerText = "✅ Kupon başarıyla kullanıldı!";
  } catch (error) {
    statusEl.innerText = "🚫 Bir hata oluştu.";
    console.error(error);
  }
};

