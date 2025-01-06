import type { Schema, Struct } from '@strapi/strapi';

export interface ConversationBlocksConversationBlock
  extends Struct.ComponentSchema {
  collectionName: 'components_conversation_blocks_conversation_blocks';
  info: {
    description: '';
    displayName: 'Conversation Block';
    icon: 'microphone';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    speaker: Schema.Attribute.String;
  };
}

export interface CourseCardsCourseFeatureRows extends Struct.ComponentSchema {
  collectionName: 'components_course_cards_course_feature_rows';
  info: {
    displayName: 'Course Feature Rows';
    icon: 'check';
  };
  attributes: {
    feature: Schema.Attribute.Text;
  };
}

export interface ExerciseBlocksBucketSort extends Struct.ComponentSchema {
  collectionName: 'components_exercise_blocks_bucket_sorts';
  info: {
    description: '';
    displayName: 'Bucket Sort';
    icon: 'manyWays';
  };
  attributes: {
    buckets: Schema.Attribute.Component<
      'exercise-blocks.bucket-sort-bucket',
      true
    >;
    prompt: Schema.Attribute.Blocks;
    rows: Schema.Attribute.Component<'exercise-blocks.bucket-sort-item', true>;
  };
}

export interface ExerciseBlocksBucketSortBucket extends Struct.ComponentSchema {
  collectionName: 'components_exercise_blocks_bucket_sort_buckets';
  info: {
    description: '';
    displayName: 'Bucket Sort Bucket';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    identifier: Schema.Attribute.Integer;
    label: Schema.Attribute.String;
  };
}

export interface ExerciseBlocksBucketSortItem extends Struct.ComponentSchema {
  collectionName: 'components_exercise_blocks_bucket_sort_items';
  info: {
    description: '';
    displayName: 'Bucket Sort Item';
  };
  attributes: {
    bucket: Schema.Attribute.Integer;
    item: Schema.Attribute.String;
    notes: Schema.Attribute.Text;
  };
}

export interface ExerciseBlocksGapFilling extends Struct.ComponentSchema {
  collectionName: 'components_exercise_blocks_gap_fillings';
  info: {
    description: '';
    displayName: 'Gap Filling';
    icon: 'book';
  };
  attributes: {
    hideNumbers: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    rows: Schema.Attribute.Component<'exercise-blocks.gap-filling-row', true>;
  };
}

export interface ExerciseBlocksGapFillingRow extends Struct.ComponentSchema {
  collectionName: 'components_exercise_blocks_gap_filling_rows';
  info: {
    description: '';
    displayName: 'Gap Filling Row';
  };
  attributes: {
    content: Schema.Attribute.Text;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    label: Schema.Attribute.String;
  };
}

export interface ExerciseBlocksOrderChips extends Struct.ComponentSchema {
  collectionName: 'components_exercise_blocks_order_chips';
  info: {
    description: '';
    displayName: 'Order Chips';
  };
  attributes: {
    rows: Schema.Attribute.Component<'exercise-blocks.order-chips-row', true>;
  };
}

export interface ExerciseBlocksOrderChipsAnswerRow
  extends Struct.ComponentSchema {
  collectionName: 'components_exercise_blocks_order_chips_answer_rows';
  info: {
    displayName: 'Order Chips Answer Row';
  };
  attributes: {
    content: Schema.Attribute.Text;
  };
}

export interface ExerciseBlocksOrderChipsRow extends Struct.ComponentSchema {
  collectionName: 'components_exercise_blocks_order_chips_rows';
  info: {
    description: '';
    displayName: 'Order Chips Row';
  };
  attributes: {
    afterPrompt: Schema.Attribute.Text;
    answers: Schema.Attribute.Component<
      'exercise-blocks.order-chips-answer-row',
      true
    >;
    prompt: Schema.Attribute.Text;
  };
}

export interface LessonPageBlocksCallout extends Struct.ComponentSchema {
  collectionName: 'components_lesson_page_blocks_callouts';
  info: {
    displayName: 'Callout';
    icon: 'message';
  };
  attributes: {
    content: Schema.Attribute.Blocks & Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<['tip', 'task']>;
  };
}

export interface LessonPageBlocksConversation extends Struct.ComponentSchema {
  collectionName: 'components_lesson_page_blocks_conversations';
  info: {
    description: '';
    displayName: 'Conversation';
    icon: 'quote';
  };
  attributes: {
    audio: Schema.Attribute.Media<'audios', true>;
    row: Schema.Attribute.Component<
      'conversation-blocks.conversation-block',
      true
    >;
  };
}

export interface LessonPageBlocksParadigm extends Struct.ComponentSchema {
  collectionName: 'components_lesson_page_blocks_paradigms';
  info: {
    displayName: 'Paradigm';
    icon: 'apps';
  };
  attributes: {
    bodyRow: Schema.Attribute.Component<'paradigm.paradigm-row', true>;
    headerRow: Schema.Attribute.Component<'paradigm.paradigm-row', false>;
    template: Schema.Attribute.Enumeration<['noun', 'verb']>;
  };
}

export interface LessonPageBlocksParagraph extends Struct.ComponentSchema {
  collectionName: 'components_lesson_page_blocks_paragraphs';
  info: {
    description: '';
    displayName: 'Paragraph';
    icon: 'file';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
  };
}

export interface LessonPageBlocksVerb extends Struct.ComponentSchema {
  collectionName: 'components_lesson_page_blocks_verbs';
  info: {
    description: '';
    displayName: 'Verb';
    icon: 'walk';
  };
  attributes: {
    firstPlu: Schema.Attribute.String;
    firstSing: Schema.Attribute.String;
    infinitive: Schema.Attribute.Blocks;
    secondPlu: Schema.Attribute.String;
    secondSing: Schema.Attribute.String;
    thirdPlu: Schema.Attribute.String;
    thirdSing: Schema.Attribute.String;
  };
}

export interface LessonPageBlocksVocabBlock extends Struct.ComponentSchema {
  collectionName: 'components_lesson_page_blocks_vocab_blocks';
  info: {
    description: '';
    displayName: 'Tile Block';
    icon: 'layer';
  };
  attributes: {
    columns: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    columnsSizeToFit: Schema.Attribute.Boolean;
    hero: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imageSize: Schema.Attribute.Enumeration<['large', 'medium', 'small']> &
      Schema.Attribute.DefaultTo<'large'>;
    row: Schema.Attribute.Component<'vocab-blocks.audio-row', true>;
    vAlign: Schema.Attribute.Enumeration<['top', 'center', 'bottom']>;
  };
}

export interface ParadigmParadigmCell extends Struct.ComponentSchema {
  collectionName: 'components_paradigm_paradigm_cells';
  info: {
    displayName: 'Paradigm Cell';
    icon: 'quote';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
  };
}

export interface ParadigmParadigmRow extends Struct.ComponentSchema {
  collectionName: 'components_paradigm_paradigm_rows';
  info: {
    description: '';
    displayName: 'Paradigm Row';
    icon: 'bulletList';
  };
  attributes: {
    cell: Schema.Attribute.Component<'paradigm.paradigm-cell', true>;
  };
}

export interface VocabBlocksAudioRow extends Struct.ComponentSchema {
  collectionName: 'components_vocab_blocks_audio_rows';
  info: {
    description: '';
    displayName: 'Audio Row';
    icon: 'microphone';
  };
  attributes: {
    audio: Schema.Attribute.Media<'audios'>;
    class: Schema.Attribute.String;
    column: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    content: Schema.Attribute.Blocks;
    gap: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    image: Schema.Attribute.Media<'images'>;
    imageSize: Schema.Attribute.Enumeration<['large', 'medium', 'small']> &
      Schema.Attribute.DefaultTo<'medium'>;
    isCentred: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isColumn: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface VocabBlocksContent extends Struct.ComponentSchema {
  collectionName: 'components_vocab_blocks_contents';
  info: {
    displayName: 'content';
    icon: 'quote';
  };
  attributes: {};
}

export interface VocabBlocksSimple extends Struct.ComponentSchema {
  collectionName: 'components_vocab_blocks_simples';
  info: {
    displayName: 'Simple';
    icon: 'write';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'conversation-blocks.conversation-block': ConversationBlocksConversationBlock;
      'course-cards.course-feature-rows': CourseCardsCourseFeatureRows;
      'exercise-blocks.bucket-sort': ExerciseBlocksBucketSort;
      'exercise-blocks.bucket-sort-bucket': ExerciseBlocksBucketSortBucket;
      'exercise-blocks.bucket-sort-item': ExerciseBlocksBucketSortItem;
      'exercise-blocks.gap-filling': ExerciseBlocksGapFilling;
      'exercise-blocks.gap-filling-row': ExerciseBlocksGapFillingRow;
      'exercise-blocks.order-chips': ExerciseBlocksOrderChips;
      'exercise-blocks.order-chips-answer-row': ExerciseBlocksOrderChipsAnswerRow;
      'exercise-blocks.order-chips-row': ExerciseBlocksOrderChipsRow;
      'lesson-page-blocks.callout': LessonPageBlocksCallout;
      'lesson-page-blocks.conversation': LessonPageBlocksConversation;
      'lesson-page-blocks.paradigm': LessonPageBlocksParadigm;
      'lesson-page-blocks.paragraph': LessonPageBlocksParagraph;
      'lesson-page-blocks.verb': LessonPageBlocksVerb;
      'lesson-page-blocks.vocab-block': LessonPageBlocksVocabBlock;
      'paradigm.paradigm-cell': ParadigmParadigmCell;
      'paradigm.paradigm-row': ParadigmParadigmRow;
      'vocab-blocks.audio-row': VocabBlocksAudioRow;
      'vocab-blocks.content': VocabBlocksContent;
      'vocab-blocks.simple': VocabBlocksSimple;
    }
  }
}
