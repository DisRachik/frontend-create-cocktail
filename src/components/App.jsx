import { lazy } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from 'components';
import Welcome from 'pages/Welcome';
import Signup from 'pages/Signup';
import Signin from 'pages/Signin';

const AddRecipe = lazy(() => import('pages/AddRecipe'));
const Drinks = lazy(() => import('pages/Drinks'));
const Favorite = lazy(() => import('pages/Favorite'));
const Main = lazy(() => import('pages/Main'));
const MyRecipes = lazy(() => import('pages/MyRecipes'));
const Recipe = lazy(() => import('pages/Recipe'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/main" />} />
      {/* <Route path="/" element={<Navigate to="/welcome" />} /> */}

      {/* Unauthorized user routes */}
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />

      {/* Authorized user routes */}
      <Route path="/" element={<Layout />}>
        <Route path="main" element={<Main />} />
        <Route path="drinks" element={<Drinks />} />
        <Route path="drinks/:categoryName" element={<Drinks />} />
        <Route path="add" element={<AddRecipe />} />
        <Route path="my" element={<MyRecipes />} />
        <Route path="favorite" element={<Favorite />} />
        <Route path="recipe/:recipeId" element={<Recipe />} />
      </Route>

      {/* Unknown route redirection */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

// export const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Navigate to="/main" />} />
//       {/* <Route path="/" element={<Navigate to="/welcome" />} /> */}

//       {/* Unauthorized user routes */}
//       <Route path="/welcome" element={<Welcome />} />
//       <Route path="/signup" element={<Signup />} />
//       <Route path="/signin" element={<Signin />} />

//       {/* Authorized user routes */}
//       <Route path="/" element={<Layout />}>
//         <Route path="main" element={<Main />} />
//         <Route path="drinks" element={<Drinks />} />
//         <Route path="drinks/:categoryName" element={<Drinks />} />
//         <Route path="add" element={<AddRecipe />} />
//         <Route path="my" element={<MyRecipes />} />
//         <Route path="favorite" element={<Favorite />} />
//         <Route path="recipe/:recipeId" element={<Recipe />} />
//       </Route>

//       {/* Unknown route redirection */}
//       <Route path="*" element={<Navigate to="/" />} />
//     </Routes>
//   );
// };
