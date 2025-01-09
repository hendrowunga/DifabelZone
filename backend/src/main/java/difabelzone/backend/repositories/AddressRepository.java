package difabelzone.backend.repositories;

import difabelzone.backend.models.Address;
import org.springframework.data.jpa.repository.JpaRepository;


public interface AddressRepository extends JpaRepository<Address, Long> {

}
