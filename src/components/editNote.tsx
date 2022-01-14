import React, { useState } from 'react';
import { RiEditBoxLine } from 'react-icons/ri';
import {
	FormControl,
	FormLabel,
	Stack,
	ButtonGroup,
	Button,
	useDisclosure,
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverArrow,
	Input,
	Textarea,
} from '@chakra-ui/react';
import { FocusLock } from '@chakra-ui/focus-lock';

interface EditComponentProps {
	onEditText: (text: string) => void;
	onEditBucket: (bucket: string) => void;
}

const Edit: React.FC<EditComponentProps> = (props) => {
	const { onOpen, onClose, isOpen } = useDisclosure();
	const [note, setNote] = useState('');
	const [bucket, setBucket] = useState('');

	const firstFieldRef = React.useRef(null);
	return (
		<Popover
			isOpen={isOpen}
			initialFocusRef={firstFieldRef}
			onOpen={onOpen}
			onClose={onClose}
			placement="right"
			closeOnBlur={false}
		>
			<PopoverTrigger>
				<Button
					size="lg"
					colorScheme="red.500"
					variant="ghost"
					style={{ padding: '2px' }}
				>
					<RiEditBoxLine />
				</Button>
			</PopoverTrigger>
			<PopoverContent p={5}>
				<FocusLock persistentFocus={false}>
					<PopoverArrow />
					<Stack spacing={4}>
						<FormControl>
							<FormLabel>Bucket</FormLabel>
							<Input
								id="bucket"
								placeholder="Bucket"
								onChange={(event) => setBucket(event.currentTarget.value)}
							/>
						</FormControl>
						<FormControl>
							<FormLabel>Note</FormLabel>
							<Textarea
								id="note"
								placeholder="Note"
								onChange={(event) => setNote(event.currentTarget.value)}
							/>
						</FormControl>
						<ButtonGroup d="flex" justifyContent="flex-end">
							<Button variant="outline" onClick={onClose}>
								Cancel
							</Button>
							<Button
								onClick={() => {
									if (note != '') {
										props.onEditText(note);
									}
									if (bucket != '') {
										props.onEditBucket(bucket);
									}
									setNote('');
									onClose();
								}}
								colorScheme="teal"
							>
								Save
							</Button>
						</ButtonGroup>
					</Stack>
				</FocusLock>
			</PopoverContent>
		</Popover>
	);
};

export default Edit;
