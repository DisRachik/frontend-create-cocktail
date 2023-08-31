import { lazy, useEffect } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout, PrivateRoute, PublicRoute } from 'components';

import { useAuth } from 'redux/auth/useAuth';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';

const AddRecipe = lazy(() => import('pages/AddRecipe'));
const Drinks = lazy(() => import('pages/Drinks'));
const Favorite = lazy(() => import('pages/Favorite'));
const Main = lazy(() => import('pages/Main'));
const MyRecipes = lazy(() => import('pages/MyRecipes'));
const Recipe = lazy(() => import('pages/Recipe'));
const Welcome = lazy(() => import('pages/Welcome'));
const Signup = lazy(() => import('pages/Signup'));
const Signin = lazy(() => import('pages/Signin'));
const PrivacyPolicy = lazy(() => import('pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('pages/TermsOfService'));

export const App = () => {
  const { isAuth, isRefreshing } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      {/* Authorized user routes */}
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            isAuth ? <Navigate to="/main" /> : <Navigate to="/welcome" />
          }
        />
        <Route
          path="/main"
          element={<PrivateRoute redirectTo="/" component={<Main />} />}
        />
        <Route
          path="/drinks"
          element={<PrivateRoute redirectTo="/" component={<Drinks />} />}
        />
        <Route
          path="/drinks/:categoryName"
          element={<PrivateRoute redirectTo="/" component={<Drinks />} />}
        />
        <Route
          path="/add"
          element={<PrivateRoute redirectTo="/" component={<AddRecipe />} />}
        />
        <Route
          path="/my"
          element={<PrivateRoute redirectTo="/" component={<MyRecipes />} />}
        />
        <Route
          path="/favorite"
          element={<PrivateRoute redirectTo="/" component={<Favorite />} />}
        />
        <Route
          path="/recipe/:recipeId"
          element={<PrivateRoute redirectTo="/" component={<Recipe />} />}
        />
        <Route
          path="/privacy-policy"
          element={
            <PrivateRoute redirectTo="/" component={<PrivacyPolicy />} />
          }
        />
        <Route
          path="/terms-of-service"
          element={
            <PrivateRoute redirectTo="/" component={<TermsOfService />} />
          }
        />

        {/* Unauthorized user routes */}
        <Route
          path="/welcome"
          element={<PublicRoute redirectTo="/" component={<Welcome />} />}
        />
        <Route
          path="/signup"
          element={<PublicRoute redirectTo="/" component={<Signup />} />}
        />
        <Route
          path="/signin"
          element={<PublicRoute redirectTo="/" component={<Signin />} />}
        />
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

// {
/* <Route
          path="/welcome"
          element={
            <PublicRoute redirectTo="/">
              <Welcome />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute redirectTo="/">
              <Signup />
            </PublicRoute>
          }
        />
        <Route
          path="/signin"
          element={
            <PublicRoute redirectTo="/">
              <Signin />
            </PublicRoute>
          }
        // /> */
// }
//   <Route
//   path="/drinks"
//   element={
//     <PrivateRoute>
//       <Drinks />
//     </PrivateRoute>
//   }
// />
// <Route
//   path="/drinks/:categoryName"
//   element={
//     <PrivateRoute>
//       <Drinks />
//     </PrivateRoute>
//   }
// />
// <Route
//   path="/add"
//   element={
//     <PrivateRoute>
//       <AddRecipe />
//     </PrivateRoute>
//   }
// />
// <Route
//   path="/my"
//   element={
//     <PrivateRoute>
//       <MyRecipes />
//     </PrivateRoute>
//   }
// />
// <Route
//   path="/favorite"
//   element={
//     <PrivateRoute>
//       <Favorite />
//     </PrivateRoute>
//   }
// />
// <Route
//   path="/recipe/:recipeId"
//   element={
//     <PrivateRoute>
//       <Recipe />
//     </PrivateRoute>
//   }
// />
