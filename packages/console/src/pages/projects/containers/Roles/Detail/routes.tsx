/*
 * Please refer to the LICENSE file in the root directory of the project.
 * https://github.com/kubesphere/console/blob/master/LICENSE
 */

import React from 'react';
import { Navigate } from 'react-router-dom';

export default [
  {
    index: true,
    element: <Navigate to="authorizations" replace />,
  },
  {
    path: 'authorizations',
    element: <></>,
  },
  {
    path: 'users',
    element: <></>,
  },
];