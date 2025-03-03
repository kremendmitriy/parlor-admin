'use client';

import './globals.css';
import { Header } from './(components)/Header/Header';
import { PageTitleProvider } from './(context)/PageTitleContext';
import { Box, CssBaseline } from '@mui/material';
import { Copyright } from './(components)/Paperbase/components/Copyright';
import { NavigatorDrawer } from './(components)/Paperbase/components/NavigatorDrawer';
import { ThemeProvider } from '@emotion/react';
import { mainTheme } from './(theme)/MainTheme/MainTheme';
import Layout from './(layout)/ArtistPageLayout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <PageTitleProvider>
            <ThemeProvider theme={mainTheme}>
              <Box sx={{ display: 'flex', minHeight: '100vh' }}>
                <NavigatorDrawer />
                <CssBaseline />
                <Box
                  sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Box component="main" sx={{ flex: 1, bgcolor: '#212121' }}>
                    <Header />
                    <Layout>{children}</Layout>
                  </Box>
                  <Box component="footer" sx={{ p: 2, bgcolor: '#212121' }}>
                    <Copyright />
                  </Box>
                </Box>
              </Box>
            </ThemeProvider>
          </PageTitleProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
