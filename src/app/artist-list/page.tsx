'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import {
  List,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemButton,
  Typography,
  Box,
} from '@mui/material';

import { SearchBar } from '../(components)/SearchBar/SearchBar';
import { Loader } from '../(components)/Loader/Loader';
import { artistsFilter } from '../(utils)/filter/artistsFilter';

import { fetchArtists } from '../(api)/fetchArtists';

const MasterList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [artistsData, setArtistsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const loadArtists = async () => {
      setIsLoading(true);
      try {
        const data = await fetchArtists();
        if (isMounted) setArtistsData(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(`Failed to fetch artists: ${error.message}`);
        } else {
          setError('Failed to fetch artists: Unknown error occurred');
        }
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };
    loadArtists();
    return () => {
      isMounted = false;
    };
  }, []);

  const filteredArtistsList = useMemo(
    () => artistsFilter(artistsData, searchQuery),
    [artistsData, searchQuery],
  );

  return (
    <Box sx={{ bgcolor: 'grey.900', color: 'white', minHeight: '100vh', p: 3 }}>
      <SearchBar
        onSearch={setSearchQuery}
        placeholder={'Search for a master...'}
      />

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Typography align="center" sx={{ color: 'red', mt: 5 }}>
          {error}
        </Typography>
      ) : (
        <List>
          {filteredArtistsList.length === 0 ? (
            <Typography align="center" sx={{ color: '#fff', mt: 5 }}>
              No artists available
            </Typography>
          ) : (
            filteredArtistsList.map((artist) => (
              <Link href={`/artist-list/${artist.id}`} passHref key={artist.id}>
                <ListItemButton
                  sx={{
                    bgcolor: 'grey.800',
                    mb: 1,
                    borderRadius: 1,
                    '&:hover': { bgcolor: 'grey.700' },
                  }}
                >
                  <ListItemAvatar>
                    <Avatar
                      sx={{
                        bgcolor: 'grey.600',
                        color: 'white',
                      }}
                    >
                      {artist.firstName.charAt(0)}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={`${artist.firstName} ${artist.lastName}`}
                    secondary={artist.nickName}
                    primaryTypographyProps={{ color: 'white' }}
                    secondaryTypographyProps={{ color: 'grey.400' }}
                  />
                </ListItemButton>
              </Link>
            ))
          )}
        </List>
      )}
    </Box>
  );
};

export default MasterList;
