
import {create} from 'zustand';
import axios from 'axios';

// Define the Zustand store
export const useAuthStore = create((set, get) => ({
    user: null,
    token: localStorage.getItem('authToken'),
    userId: null,
    productDetails: [],
    PurchasedProducts:[],

    // Fetch user data
    fetchUserData: async () => {
        const { token, userId } = get();
        if (!token || !userId) return;

        try {
            const response = await axios.get(`http://localhost:8000/api/customer/get/${userId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            set({ user: response.data.userDetail });
            // console.log("user data in authcontext store",get().user)
        } catch (error) {
            console.error('Failed to load user data:', error);
            get().logout();
        }
    },
    // Update user data (setUser function)
    setUser: (newUserData) => {
        set({ user: newUserData });
    },


    // Login function
    login: async (data) => {
        // console.log("data from login :",data)
        try {
            const { token, userData } = data;
            set({ token, userId: userData._id });
            localStorage.setItem('authToken', token);
            
    
            // Call fetchUserData to ensure user data is updated
            await get().fetchUserData();  // Ensure user data is loaded after login
            return true;
        } catch (error) {
            console.error('Login failed:', error);
            return false;
        }
    },

    // Logout function
    logout: (navigate) => {
        set({ user: null, token: null, userId: null });
        localStorage.removeItem('authToken');
        navigate('/')
    },

    // Check if the user is authenticated
    checkAuthentication: (navigate) => {
        const { token, user } = get();
        if (!token || !user) {
            navigate('/login'); // Redirect to Login if not authenticated
            return false;
        }
        return true;
    },
    // Add item to wishlist
    addToWishlist: async (productId, navigate) => {
        if (!get().checkAuthentication(navigate)) return;

        try {
            const { token, userId, productDetails } = get();
            const productResponse = await axios.get(`http://localhost:8000/api/product/get/${productId}`);
            const productData = productResponse.data;
            console.log("Product data in authcontext store ", productData)
            console.log('user id is',userId)

            await axios.post(
                `http://localhost:8000/api/wish/addWish/${userId}/${productId}`,
                { productId },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            set({ productDetails: [...productDetails, productData] });
            get().fetchUserData();
        } catch (error) {
            console.error('Failed to add to wishlist:', error);
        }
    },

    // Remove item from wishlist
    removeFromWishlist: async (productId) => {
        if (!get().checkAuthentication()) return;
    
        try {
            const { token, userId, productDetails } = get();
            await axios.delete(`http://localhost:8000/api/wish/delWish/${userId}/${productId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            
            // Filter out the removed product and update productDetails in the store
            set({
                productDetails: productDetails.filter(item => item.productDetail._id !== productId),
            });
        } catch (error) {
            console.error('Failed to remove from wishlist:', error);
        }
    },
    

    // Purchase product
    purchaseProduct: async (productDetail, shippingDetail, paymentDetail,others, navigate) => {
        if (!get().checkAuthentication(navigate)) return;

        try {
            console.log("shippingDetail is",shippingDetail)
            const { token,userId } = get();
            console.log("user id In purchase product of authcontext store is",userId)
            await axios.post(
                'http://localhost:8000/api/purchase/add',
                {userId, productDetail, shippingDetail, paymentDetail,others },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            get().fetchUserData();
        } catch (error) {
            console.error('Failed to purchase product:', error);
        }
    },

    
}));


