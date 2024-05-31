import { useCartStore } from './useCartStore';
import { ref, watch } from "vue";
import { defineStore } from "pinia";
import { type IProduct } from '@/types/product-type';
import { useProductStore } from './useProductStore';
import product_data from '@/data/product-data';

export const useUtilityStore = defineStore("utility", () => {
  const route = useRoute();
  const productStore = useProductStore();
  const cartStore = useCartStore();
  let openSearchBar = ref<boolean>(false);
  let openMobileMenus = ref<boolean>(false);
  // product modal
  let modalId = ref<string | null>('product-modal-641e887d05f9ee1717e1348a');
  let product = ref<IProduct | null>(product_data[0]);
  // video modal
  const videoUrl = ref<string>('https://www.youtube.com/embed/EW4ZYb3mCZk')
  const isVideoOpen: Ref<boolean> = ref(false);
  let iframeElement: HTMLIFrameElement | null = null;

  // handle image active
  const handleOpenSearchBar = () => {
    openSearchBar.value = !openSearchBar.value;
  };

  // handle image active
  const handleOpenMobileMenu = () => {
    openMobileMenus.value = !openMobileMenus.value;
  };

  // modal video play
  const playVideo = (videoId:string) => {
    const videoOverlay = document.querySelector("#video-overlay");
    videoUrl.value = `https://www.youtube.com/embed/${videoId}`
    if (!iframeElement) {
      iframeElement = document.createElement("iframe");
      iframeElement.setAttribute("src", videoUrl.value);
      iframeElement.style.width = "60%";
      iframeElement.style.height = "80%";
    }
    
    isVideoOpen.value = true;
    videoOverlay?.classList.add("open");
    videoOverlay?.appendChild(iframeElement);
  };
  // close modal video
  const closeVideo = () => {
    const videoOverlay = document.querySelector("#video-overlay.open");
    
    if (iframeElement) {
      iframeElement.remove();
      iframeElement = null;
    }
    
    isVideoOpen.value = false;
    videoOverlay?.classList.remove("open");
  };

  // handle Open Modal
  const handleOpenModal = (id: string, item: IProduct) => {
    modalId.value = id;
    product.value = item;
    productStore.handleImageActive(item.img)
    cartStore.initialOrderQuantity()
  };

  const removeBackdrop = () => {
    const modalBackdrop = document.querySelector('.modal-backdrop');
    if (modalBackdrop) {
      modalBackdrop.remove();
      document.body.classList.remove('modal-open');
      document.body.removeAttribute('style');
    }
  };

  const calculateMonthlyPayment = (price: number) => {
    const downPaymentRate = 0.20;
    const annualInterestRate = 8.99 / 100;
    const monthlyInterestRate = annualInterestRate / 12;
    let loanTermMonths;
  
    // Determine the loan term based on the price range
    if (price >= 1 && price <= 14999) {
        loanTermMonths = 120;
    } else if (price >= 15000 && price <= 24999) {
        loanTermMonths = 144;
    } else if (price >= 25000 && price <= 49999) {
        loanTermMonths = 180;
    } else if (price >= 50000) {
        loanTermMonths = 240;
    } else {
      return 0;
    }
  
    // Calculate the down payment and the loan amount
    const downPayment = price * downPaymentRate;
    const loanAmount = price - downPayment;
  
    // Calculate the monthly payment using the loan formula
    const monthlyPayment = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTermMonths)) /
                           (Math.pow(1 + monthlyInterestRate, loanTermMonths) - 1);
  
    return Math.round(monthlyPayment);
  }

  watch(() => route.path, () => {
    openSearchBar.value = false;
    openMobileMenus.value = false;
  })

  return {
    handleOpenSearchBar,
    openSearchBar,
    handleOpenModal,
    modalId,
    product,
    openMobileMenus,
    handleOpenMobileMenu,
    playVideo,
    isVideoOpen,
    iframeElement,
    closeVideo,
    removeBackdrop,
    calculateMonthlyPayment
  };
});
