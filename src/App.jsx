import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Header from '@/components/Header';

const HomePage = lazy(() => import('@/pages/HomePage'));
const CatalogPage = lazy(() => import('@/pages/CatalogPage'));
const SvgSprite = lazy(() => import('@/components/SvgSprite'));

const App = () => {
	return (
		<>
			<Header />
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/catalog" element={<CatalogPage />} />
					<Route path="/catalog/:id" element={<div>/catalog/:id</div>} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
				<SvgSprite />
			</Suspense>
		</>
	);
};

export default App;
