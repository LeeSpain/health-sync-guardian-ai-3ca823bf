
import React from 'react';
import { Button } from '@/components/ui/button';
import { TableCell, TableRow } from '@/components/ui/table';
import { Plus, Check, Info } from 'lucide-react';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { OptimizedImage } from '@/components/ui/optimized-image';

export interface ProductItemProps {
  id: string;
  name: string;
  oneTimePrice: number | null;
  monthlyPrice: number | null;
  type: 'essential' | 'ai-device' | 'professional' | 'subscription';
  image: string;
  isInCart: (id: string, isSubscription: boolean) => boolean;
  onAddToCart: (item: any, isSubscription: boolean) => void;
  alternateRowColor?: boolean;
}

const ProductItem: React.FC<ProductItemProps> = ({
  id,
  name,
  oneTimePrice,
  monthlyPrice,
  type,
  image,
  isInCart,
  onAddToCart,
  alternateRowColor = false
}) => {
  return (
    <TableRow className={alternateRowColor ? "bg-gray-50" : "bg-white"}>
      <TableCell>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-md overflow-hidden bg-white border border-gray-200 flex-shrink-0 flex items-center justify-center">
            <OptimizedImage 
              src={image} 
              alt={name} 
              priority={false}
              objectFit="contain"
            />
          </div>
          <span className="font-medium">{name}</span>
        </div>
      </TableCell>
      <TableCell>
        {oneTimePrice ? (
          <>
            €{oneTimePrice.toFixed(2)}
            {monthlyPrice && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-4 w-4 text-gray-400 ml-1.5 inline cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-white p-3 shadow-lg rounded-lg border border-gray-200">
                    <p className="text-sm">Includes automatic monthly subscription</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </>
        ) : '—'}
      </TableCell>
      <TableCell>{monthlyPrice ? `€${monthlyPrice.toFixed(2)}` : '—'}</TableCell>
      <TableCell>
        <div className="flex gap-2">
          {oneTimePrice !== null && (
            <Button 
              size="sm" 
              variant={type === 'essential' ? 'default' : 'outline'} 
              onClick={() => onAddToCart({id, name, oneTimePrice, monthlyPrice, type, image}, false)}
              disabled={isInCart(id, false)}
              className={type === 'essential' 
                ? "bg-brand-teal hover:bg-brand-teal/90 flex items-center gap-1" 
                : "text-brand-teal border-brand-teal hover:bg-brand-teal/10 flex items-center gap-1"
              }
            >
              {isInCart(id, false) ? 
                <><Check className="h-4 w-4" /> Added</> : 
                <><Plus className={type === 'essential' ? "h-4 w-4" : "h-3 w-3"} /> {type === 'essential' ? 'Add' : 'Buy'}</>}
            </Button>
          )}
          {monthlyPrice !== null && !oneTimePrice && (
            <Button 
              size="sm" 
              onClick={() => onAddToCart({id, name, oneTimePrice, monthlyPrice, type, image}, true)}
              disabled={isInCart(id, true)}
              className={type === 'professional' 
                ? "bg-brand-purple hover:bg-brand-purple/90 flex items-center gap-1" 
                : "bg-brand-orange hover:bg-brand-orange/90 flex items-center gap-1"
              }
            >
              <Plus className="h-3 w-3" /> Sub
            </Button>
          )}
        </div>
      </TableCell>
    </TableRow>
  );
};

export default ProductItem;
