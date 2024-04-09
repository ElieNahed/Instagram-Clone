// import {create} from 'zustand';
// import {persist, createJSONStorage} from 'zustand/middleware';
// import zustandStorage from '../utils/mmkv';

// const useUserStore = create(
//   persist(
//     set => ({
//       id: null,
//       username: null,
//       email: null,
//       firstName: null,
//       lastName: null,
//       gender: null,
//       image: null,
//       setUserData: payload => set({...payload}),
//       clearUserData: () =>
//         set({
//           id: null,
//           username: null,
//           email: null,
//           firstName: null,
//           lastName: null,
//           gender: null,
//           image: null,
//         }),
//     }),
//     {
//       name: 'user-store',
//       storage: createJSONStorage(() => zustandStorage),
//     },
//   ),
// );

// export default useUserStore;
