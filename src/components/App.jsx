import { lazy } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from 'components';

const AddRecipe = lazy(() => import('pages/AddRecipe'));
const Drinks = lazy(() => import('pages/Drinks'));
const Favorite = lazy(() => import('pages/Favorite'));
const Main = lazy(() => import('pages/Main'));
const MyRecipes = lazy(() => import('pages/MyRecipes'));
const Recipe = lazy(() => import('pages/Recipe'));
const Signin = lazy(() => import('pages/Signin'));
const Signup = lazy(() => import('pages/Signup'));
const Welcome = lazy(() => import('pages/Welcome'));

export const App = () => {
  return (
    <Routes>
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
