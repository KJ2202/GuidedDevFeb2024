update UsrRealtyFreedomUI
set UsrCommission =
	case 
		when UsrOfferTypeId = '0EC30BA5-46E7-4CD3-AE5A-FABA26B342E5' then UsrPrice * 0.02 --sale 2%
		when UsrOfferTypeId = '986E3B73-4813-4071-A954-05BD247FD7C7' then UsrPrice * 0.50 --rental 50%
	end
where UsrCommission = 0