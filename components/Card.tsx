'use client'
import React from 'react';
import { Card, CardMedia, CardContent, Typography, Rating, Chip, Box, Stack } from '@mui/material';
import { Clock2, Locate } from 'lucide-react';

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  isFavorite?: boolean;
  tags?: string[];
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  title,
  location,
  price,
  rating,
  reviewCount,
  imageUrl,
  tags = [],
}) => {

  return (
    <Card style={{flex : '0 0 20%', minHeight :0}} className=" overflow-hidden rounded-lg shadow-lg p-0 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Card Header with Image */}
      <div className="relative p-2">
        <CardMedia
          component="img"
          height="180"
          image={imageUrl}
          alt={title}
          className="h-[180px] w-[200px] object-cover"
        />
      </div>

      {/* Card Content */}
      <CardContent className="p-4">
        <div className="flex flex-col gap-2">
          {/* Title */}
          <Typography variant="body1" className=" text-text-color" style={{ fontWeight: 600 }}>
            {title}
          </Typography>
          {tags.length > 0 && (
            <Stack direction={"column"} spacing={1}>
              {tags.map((tag, index) => (
                <Chip
                  key={index}
                  label={tag}
                  size="small"
                  icon={<Clock2 fontSize="small" />}
                  sx={{ background: "#fff", justifyContent: "flex-start", fontSize: "0.8rem", color: "#495560", fontWeight: 500 }}
                />
              ))}
            </Stack>
          )}
          {/* Rating */}
          <div className='flex justify-between items-center'>
            <div className="flex  flex-col justify-start gap-2">
              <Rating value={rating} precision={0.5} readOnly size="small" />
              <Typography variant="body2" className="text-[#778088]">
                ({reviewCount} reviews)
              </Typography>
            </div>
            <div>
            <Typography variant="body1" sx={{fontWeight: 600, fontSize: "1.25rem"}} className='text-primary'>
                ${price} 
              </Typography>
              <Typography variant="body2" className="text-[#778088]">
                per person
              </Typography>
            </div>
          </div>



        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;