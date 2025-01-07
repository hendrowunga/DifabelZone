package difabelzone.backend.services;

import difabelzone.backend.models.User;
import difabelzone.backend.payloads.AddressDTO;

import java.util.List;

public interface AddressService {
     AddressDTO createAddress(AddressDTO addressDTO, User user);

     List<AddressDTO> getAddresses();

     AddressDTO getAddressesById(Long addressId);

     List<AddressDTO> getUserAddresses(User user);

     AddressDTO updateAddress(Long addressId, AddressDTO addressDTO);

     String deleteAddress(Long addressId);
}
